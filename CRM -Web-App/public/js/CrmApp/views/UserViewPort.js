Ext.define('CrmApp.views.UserViewPort', {
    extend   : 'Ext.Viewport',
    requires : ['CrmApp.views.ComplaintGridPanel'],
    id: 'mainViewPort',
	layout: 'border',
    items: [
		{
			region: 'north',
			height: 110, // give north and south regions a height
			contentEl: 'north'
		}, {
			// lazily created panel (xtype:'panel' is default)
			region: 'south',
			contentEl: 'south',
			height: 46,
			margins: '0 0 0 0'
		},
		// in this instance the TabPanel is not wrapped by another panel
		// since no title is needed, this Panel is added directly
		// as a Container
		Ext.create('Ext.tab.Panel', {
			region: 'center', // a center region is ALWAYS required for border layout
			deferredRender: false,
			activeTab: 0,     // first tab initially active
			items: [{
				contentEl: 'complaints',
				title: 'Complaints',
				autoScroll: true
			}, {
				contentEl: 'order',
				title: 'Order',
				autoScroll: true
			},{
				contentEl: 'callBack',
				title: 'Call Back',
				autoScroll: true
			}, {
				contentEl: 'calls',
				title: 'Calls',
				autoScroll: true
			},{
				contentEl: 'otherLanguage',
				title: 'Other Language',
				autoScroll: true
			}, {
				contentEl: 'callQualityAnalysis',
				title: 'Call Quality Analysis',
				autoScroll: true
			},{
				contentEl: 'dndApprovalRejection',
				title: 'DND Approval/ Rejection',
				autoScroll: true
			}, {
				contentEl: 'attendance',
				title: 'Attendance',
				autoScroll: true
			}]
		})
	]
});