document.write("hello")
var div_1_sizes = [
                [300, 250],
                [300, 600],
                [728, 90],
                [970, 250]
            ];
            var div_2_sizes = [
                [300, 250],
                [300, 600],
                [728, 90],
                [970, 250]
            ];
            var PREBID_TIMEOUT = 10000;

            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];

            var adUnits = [
                {
                    code: 'div-1',
                    mediaTypes: {
                        banner: {
                            sizes: div_1_sizes
                        }
                    },
                    bids: [{
                        bidder: 'appnexus',
                        params: {
                            placementId: 11485454
                        }
                    }]
                },
                {
                    code: 'div-2',
                    mediaTypes: {
                        banner: {
                            sizes: div_2_sizes
                        }
                    },
                    bids: [{
                        bidder: 'appnexus',
                        params: {
                            placementId: 13144370
                        }
                    }]
                }
            ];

            pbjs.que.push(function() {
                pbjs.addAdUnits(adUnits);
                pbjs.requestBids({
                    bidsBackHandler: function(bidResponses) {
                        initAdserver();
                    },
                    timeout: PREBID_TIMEOUT
                });

            });
             <!-- Prebid Config Section END -->
var apntag = apntag || {};
            apntag.anq = apntag.anq || [];
            apntag.anq.push(function() {
                apntag.setPageOpts({
                    member: 1543
                });
                apntag.defineTag({
                    tagId: 10885450,
                    sizes: div_1_sizes,
                    targetId: 'div-1'
                });
                apntag.defineTag({
                    tagId: 10885450,
                    sizes: div_2_sizes,
                    targetId: 'div-2'
                });
            });

            //start loading tags
            function initAdserver() {
                if (pbjs.requestSent) {
                    return;
                }
                pbjs.requestSent = true;
                pbjs.que.push(function() {
                    apntag.anq.push(function() {
                        pbjs.setTargetingForAst();
                        apntag.loadTags();
                    });
                });
            }
