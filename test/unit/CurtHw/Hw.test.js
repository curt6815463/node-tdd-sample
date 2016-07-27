import task1_initModel from '../../../src/database/task1';
import FacebookHelper from '../../../src/facebook/helper.js'

describe.only('HomwWork', () => {
  let models = null;
  let facebookHelper = null;
  let friends = null;

  before(async (done) => {
    models = await task1_initModel();
    let userId = "656537631096363";
    let token = "EAACEdEose0cBALSWnixOLiY8WFvCkHJ2T1TXhO7Mip0VMzeSLjwZCZAEVZAIlKD4vlSA7iH96IZCMcjIyY8xIUQkVR3xRa6sLQL758fZAjLwKrbdnKSO9oeTCiNRGNgjJb188j5OZCI2wbNelCKoFzVDovJ88i5D9z4dohMvh8pAZDZD";
    facebookHelper = new FacebookHelper({userId, token});
    done();
  });


  it('把從 facebook 取得的 friends list 存入 sequelize 之 friend model (create)', async (done) => {
    try {

      //f_list => my friends List
      friends = await facebookHelper.getFriends();
      //write friends in to database.
      let result = await models.Friend.bulkCreate(friends);
      //friend numbers should equal database record numbers
      friends.length.should.equal(result.length);
      // friends = await facebookHelper.getFriends();
      //
      // let result =
      // await models.Friend.create({
      //   name: friends[0].name,
      //   facebookId: friends[0].id,
      //   email: '',
      // });
      //
      // result.name.should.be.eq('傅耀德');
      // result.facebookId.should.be.eq('901833236500661');
      // result.email.should.be.eq('');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('原本用 api 取得 friends list 改為透過查詢資料庫的方式 (find)', async (done) => {
    try {


      let friend = await models.Friend.findOne({
        where: {
          name: '傅耀德'
        },
      });
      friend.name.should.equal('傅耀德');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('原本用 api 取得 friends list 改為透過查詢資料庫的方式 (find)', async (done) => {
    try {


      let friend = await models.Friend.findOne({
        where: {
          name: '傅耀德'
        },
      });
      friend.email = 'hellojs@trunk.studio';
      await friend.save();

      friend.email.should.equal('hellojs@trunk.studio');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('原本用 api 取得 friends list 改為透過查詢資料庫的方式 (find)', async (done) => {
    try {


      let friend = await models.Friend.findOne({
        where: {
          name: '傅耀德'
        },
      });
      await friend.destroy();

      let test = await models.Friend.findOne({
        where: {
          name: '傅耀德'
        },
      });
      (test === null ).should.be.true;

      done();
    } catch (e) {
      done(e);
    }
  });

});
