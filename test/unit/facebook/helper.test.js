import FacebookHelper from '../../../src/facebook/helper.js'

describe('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "656537631096363";
    let token = "EAACEdEose0cBAAl5zb7tl2OzTfLA2INXGd6NsJ6ZAZCvh3cw45fJB4IrkqGsGkSN99T5gJ4BImecZBsiABknIgt3XR0VzoX72gBJNFYm32rUbZAraVFsc56P5S4eRPNaYY9DP8vqMuZCuFgZBZC7F3MJV24cmtMAJyz5Br8r8e4TwZDZD";
    facebookHelper = new FacebookHelper({userId, token});
    console.log(facebookHelper);
    done();
  });

  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name", "id");
      done();
    } catch (e) {
      done(e);
    }
  });

  it.skip("publish post", async (done) => {
    try {
      let post = {
        message: 'test facebook post api'
      }
      let result = await facebookHelper.publishPost(post);
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
});
