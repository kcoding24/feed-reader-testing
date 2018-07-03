
$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url inside allFeeds are defined', function() {
          for (var i=0; i<allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe('')
          }
        });

         it('name inside allFeeds are defined', function() {
           for (var i=0; i<allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('')
           }
         });
    });

    describe('The menu', function(){
         // checking menu will be hidden by default
         it('first loading menu is hidden', function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

          it('menu change visibility when clicked', function(){
            var menuLink = $('.menu-icon-link');
            menuLink.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuLink.trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function(){

         beforeEach(function(done){
           loadFeed(0,done)
         });

         it('load feed has been loaded', function(done){
           expect($('.feed .entry').length).toBeGreaterThan(0);
           done();
         });
    });

    describe('New Feed Selection', function(){
       var oldfeed = "";
       var newfeed = "";

       //oldIndex will be the link originally showing, newIndex will be the link
       //user will click
       //compare these two value and check where or not content is changing.
      function contentChangeChecker (oldIndex, newIndex) {

        beforeEach(function(done){

          loadFeed(oldIndex, function() {
              oldfeed = $('.feed').html();

            loadFeed(newIndex, function() {
              newfeed = $('.feed').html();
              done();
            })

          })
        });

        it('when new link are clicked, content has been changed', function() {
          expect(oldfeed).not.toBe(newfeed)
        });
      }

    contentChangeChecker(0,1);
    });
})
