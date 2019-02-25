doucment.write("25th feb")
var apn_Panoramabanner_A_sizes = [
    [930,180],
    [728, 90],
    [930, 600],
    [970, 90],
    [970, 250]
];
var apn_Panoramabanner_sizes = [
    [930,180],
    [728, 90],
    [930, 600]
];
var apn_Stickybanner_sizes = [
    [160, 600],
    [300, 600],
    [120, 600]
];
var apn_Artikelbanner_sizes = [
    [300, 250]
];
var apn_Artikelbanner_B_sizes = [
    [300, 250],
    [300, 600]
];

var PREBID_TIMEOUT = 1000;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var adUnits = [{
        code: 'apn_Panoramabanner_A_15028106',
        mediaTypes: {
            banner: {
                sizes: apn_Panoramabanner_A_sizes
            }
        },
        bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206656" } },
{ bidder: 'openx', params: { unit: "540625694", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647907, priceType: 'net'} }
]
}, {
        code: 'apn_Panoramabanner_B_15028109',
        mediaTypes: {
            banner: {
                sizes: apn_Panoramabanner_sizes
            }
        },
        bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206658" } },
{ bidder: 'openx', params: { unit: "540625695", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647908, priceType: 'net'} }
]
}, {
        code: 'apn_Panoramabanner_C_15028110',
        mediaTypes: {
            banner: {
                sizes: apn_Panoramabanner_sizes
            }
        },
        bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206664" } },
{ bidder: 'openx', params: { unit: "540625696", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647909, priceType: 'net'} }
]
}, {
        code: 'apn_Stickybanner_A_15028114',
        mediaTypes: {
            banner: {
                sizes: apn_Stickybanner_sizes
          }
      },
      bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206666" } },
{ bidder: 'openx', params: { unit: "540625697", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647910, priceType: 'net'} }
]
}, {
        code: 'apn_Stickybanner_B_15028115',
        mediaTypes: {
            banner: {
                sizes: apn_Stickybanner_sizes
      }
  },
  bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206668" } },
{ bidder: 'openx', params: { unit: "540625698", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647911, priceType: 'net'} }
]
}, {
        code: 'apn_Artikelbanner_A_15028088',
        mediaTypes: {
            banner: {
                sizes: apn_Artikelbanner_sizes
      }
  },
  bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206648" } },
{ bidder: 'openx', params: { unit: "540625692", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647912, priceType: 'net'} }
]
}, {
        code: 'apn_Artikelbanner_B_15028092',
        mediaTypes: {
            banner: {
                sizes: apn_Artikelbanner_B_sizes
      }
  },
  bids: [
{ bidder: 'rubicon', params: { accountId: "10478", siteId: "243940", zoneId: "1206650" } },
{ bidder: 'openx', params: { unit: "540625693", delDomain: "jfmedier-d.openx.net"} },
{ bidder: 'adform', params: { mid: 647913, priceType: 'net'} }
]

}];

pbjs.que.push(function() {
  // Adjust bid price for a bidder
  pbjs.aliasBidder('appnexus', 'xaxis');
  pbjs.bidderSettings = {
     rubicon: {
          bidCpmAdjustment : function(bidCpm){
              // adjust the bid in real time before the auction takes place
              return bidCpm * 0.85;
          }
      }
  };

// Setup prebid analytics for different providers
  pbjs.enableAnalytics({
  provider: 'sigmoid',
  options: {
  publisherIds: '3gxdf18d32'
      }
  });

  pbjs.setConfig({
  consentManagement: {
  cmpApi: 'iab',
  timeout: 5000,
  allowAuctionWithoutConsent: true
          }

      });
  });
    pbjs.addAdUnits(adUnits);  
    pbjs.requestBids({
        bidsBackHandler: function(bidResponses) {
            initAdserver();
        },
        timeout: PREBID_TIMEOUT
    });

 <!-- Prebid Config Section END -->
var apntag = apntag || {};
apntag.anq = apntag.anq || [];
apntag.anq.push(function() {

    apntag.defineTag({
        tagId: 15028106,
        sizes: apn_Panoramabanner_A_sizes,
        targetId: 'apn_Panoramabanner_A_15028106'
    });
    apntag.defineTag({
        tagId: 15028109,
        sizes: apn_Panoramabanner_sizes,
        targetId: 'apn_Panoramabanner_B_15028109'
    });
    apntag.defineTag({
        tagId: 15028110,
        sizes: apn_Panoramabanner_sizes,
        targetId: 'apn_Panoramabanner_C_15028110'
    });
    apntag.defineTag({
        tagId: 15028114,
        sizes: apn_Stickybanner_sizes,
        targetId: 'apn_Stickybanner_A_15028114'
    });
    apntag.defineTag({
        tagId: 15028115,
        sizes: apn_Stickybanner_sizes,
        targetId: 'apn_Stickybanner_B_15028115'
    });
    apntag.defineTag({
        tagId: 15028088,
        sizes: apn_Artikelbanner_sizes,
        targetId: 'apn_Artikelbanner_A_15028088'
    });
    apntag.defineTag({
        tagId: 15028092,
        sizes: apn_Artikelbanner_B_sizes,
        targetId: 'apn_Artikelbanner_B_15028092'
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
