Ext.require(['*']);

Ext.onReady(function() {
	Ext.QuickTips.init();

	// NOTE: This is an example showing simple state management. During development,
	// it is generally best to disable state management as dynamically-generated ids
	// can change across page loads, leading to unpredictable results.  The developer
	// should ensure that stable state ids are set for stateful components in real apps.
	Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

	var viewport = Ext.create('Ext.Viewport', {
		id: 'border-example',
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

	var callForm = Ext.create('Ext.form.Panel', {
		renderTo: 'callFormDiv',
        autoHeight: true,
        width   : 215,
        bodyPadding: 5,
		margin: '8 0 0 0',
        items   : [
			{
                xtype: 'fieldcontainer',
                msgTarget : 'side',
                layout: 'hbox',
                items: [
                    {
						xtype: 'textfield',
						name: 'phoneNumber',
						allowBlank: false,
						minLength: 10,
						width: 120,
					},
					{
						xtype: 'button',
						iconCls: 'phoneCall',
						text: 'Call',
						//formBind: true,
						//disabled: true,
						width: 60,
						margin: '0 0 0 10',
						handler: function () {
							//var form = this.up('form').getForm();
							//if (form.isValid()) {
								//alert('true');
								showNewCallPopup();
							//}
						}
					}
                ]
            }
		]
	});

	var mainControlForm = Ext.create('Ext.form.Panel', {
		renderTo: 'mainControlFormDiv',
        autoHeight: true,
        width   : 310,
        bodyPadding: 5,
		margin: '8 0 0 0',
        items   : [
			{
            xtype: 'radiogroup',
            cls: 'x-check-group-alt',
            items: [
                {boxLabel: 'Online', name: 'rb-auto', inputValue: 1, checked: true},
                {boxLabel: 'Away', name: 'rb-auto', inputValue: 2},
                {boxLabel: 'Logout', name: 'rb-auto', inputValue: 3},
                {boxLabel: 'Out. Call', name: 'rb-auto', inputValue: 4}
            ]
        }
		]
	});

	var searchForm = Ext.create('Ext.form.Panel', {
		renderTo: 'searchFormDiv',
        autoHeight: true,
        bodyPadding: 5,
		margin: '1 0 0 0',
        items   : [
			{
                xtype: 'fieldcontainer',
                msgTarget : 'side',
                layout: 'hbox',
                items: [
                    {
						xtype: 'textfield',
						fieldLabel: 'Phone Number',
						name: 'searchPhoneNumber',
						allowBlank: false,
						minLength: 10,
						margin: '15 0 0 0'
					},
					{
						xtype: 'fieldset',
						title: 'Search Date',
						layout: 'hbox',
						width: 230,
						margin: '0 0 0 10',
						height: 48,
						items: [
							{
							xtype: 'radio',
							checked: true,
							boxLabel: 'Call Date',
							name: 'dateOption',
							inputValue: 'red'
						}, {
							xtype: 'radio',
							boxLabel: 'Adv, Booking Date',
							name: 'dateOption',
							inputValue: 'blue',
							margin: '0 0 0 10'
						}]
					},
					{
						xtype: 'fieldset',
						title: 'Date Range',
						layout: 'hbox',
						width: 310,
						margin: '0 0 0 10',
						height: 48,
						items: [
							{
								xtype: 'datefield',
								name: 'startDate',
								fieldLabel: 'From',
								margin: '0 5 0 0',
								allowBlank: false,
								labelWidth : 30,
								width: 140
							},
							{
								xtype: 'datefield',
								name: 'endDate',
								fieldLabel: 'To',
								allowBlank: false,
								labelWidth : 20,
								width: 140
							}
						]
					},
					{
						xtype: 'button',
						iconCls: 'searchBtn',
						text: 'Find',
						width: 60,
						margin: '15 0 0 10',
						handler: function () {
							alert('true');
						}
					}
                ]
            }
		]
	});
	
	var gridHeight = Ext.getBody().getViewSize().height - 260;
	//alert(gridHeight);
	// create the grid
    var dataGrid = Ext.create('Ext.grid.Panel', {
		//store: store,
		renderTo: 'dataGrid',
		width: 'auto',
        columns: [
            {text: "Call Start Time", width: 120, dataIndex: 'callStart', sortable: true},
            {text: "Call End Time", width: 120, dataIndex: 'callEnd', sortable: true},
            {text: "Extension", width: 120, dataIndex: 'extn', sortable: true},
            {text: "Duration", width: 120, dataIndex: 'duration', sortable: true},
			{text: "Customer", width: 120, dataIndex: 'customer', sortable: true},
            {text: "Phone Number", width: 120, dataIndex: 'phoneNum', sortable: true},
            {text: "Source", width: 120, dataIndex: 'source', sortable: true},
            {text: "Product", width: 120, dataIndex: 'product', sortable: true},
			{text: "Option", width: 120, dataIndex: 'option', sortable: true},
            {text: "Disposition", width: 120, dataIndex: 'disposition', sortable: true},
			{text: "Reasons", width: 120, dataIndex: 'reasons', sortable: true},
            {text: "Rep", width: 120, dataIndex: 'rep', sortable: true},
            {text: "Team", width: 120, dataIndex: 'team', sortable: true},
            {text: "Sub-Team", width: 120, dataIndex: 'subTeam', sortable: true},
			{text: "Media", width: 120, dataIndex: 'media', sortable: true},
            {text: "Language", width: 120, dataIndex: 'lang', sortable: true},
			{text: "Transferred", width: 120, dataIndex: 'transferred', sortable: true},
            {text: "Notes", width: 120, dataIndex: 'notes', sortable: true}
        ],
        height: gridHeight,//firefox 377,//chrome 387,
		width: 'auto'
    });
});