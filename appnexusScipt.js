document.write("This text comes from an external script.");
<script type="text/javascript" src="http://acdn.adnxs.com/prebid/not-for-prod/1/prebid.js" async> </script>
        <script type="text/javascript" src="http://acdn.adnxs.com/ast/ast.js" async></script>
        <!-- Prebid Config Section START -->
        <!-- Make sure this is inserted before your AST tag -->
        <script>
            var div_1_sizes = [
                [300, 250],
                [300, 600]
            ];
            var div_2_sizes = [
                [728, 90],
                [970, 250]
            ];
            var PREBID_TIMEOUT = 1000;

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
                            placementId: 13144370
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

        </script>
        <!-- Prebid Config Section END -->

        <script type="text/javascript">
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

        </script>