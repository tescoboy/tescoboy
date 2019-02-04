
var div_1_sizes = [
                [300, 250],
                [300, 600],
                [728, 90],
                [970, 250],
                [930,180]
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
                    bids: [
            {bidder: 'rubicon', params: {accountId: "10478", siteId: "65884", zoneId: "309498"}},
            {bidder: 'appnexus', params: {placementId: "11485448"}},
            {bidder: 'openx', params: { unit: "539223805", delDomain: "jfmedier-d.openx.net"}},
            {bidder: 'ix', params: { siteId: "210119", size: [300, 250] }},         
            {bidder: 'xaxis', params: { placementId: "5760264"}}
        ]
    },
                {
                    code: 'div-2',
                    mediaTypes: {
                        banner: {
                            sizes: div_2_sizes
                        }
                    },
                    bids: bids: [
            {bidder: 'rubicon', params: {accountId: "10478", siteId: "65884", zoneId: "309500"}},
            {bidder: 'appnexus', params: {placementId: "11485449"}},
            {bidder: 'openx', params: { unit: "539223806", delDomain: "jfmedier-d.openx.net"}},
            {bidder: 'ix', params: { siteId: "212726", size: [300, 250] }},
            {bidder: 'xaxis', params: { placementId: "5760265"}}
        ]
    }, {
      

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
                    tagId: 12886199,
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
