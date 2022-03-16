/*
SCRIPTS
*/


var sku_dealer_pages = {
    "drc-oc": '<iframe width="1000px" height="1500px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMFGgAOVpuPYaQhgUCwL1auo4WGRQ6now7Kc5UTyfs6g_2wCfE2D71Iy-GgYy5B8ONJcpZs5JbT6dU/pubhtml?gid=261086542&amp;single=true&amp;widget=true&amp;headers=false"></iframe>'
};


function dealer_orders (company) {
    return sku_dealer_pages[company];
}

$('main').html(dealer_orders("drc-oc"));