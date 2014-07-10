var required = '<span class="requiredFld" data-qtip="Required">*</span>', win;
var pinResponseArr = new Array();
function showNewCallPopup() {
	if (!win) {
		var showNewCallForm = Ext.widget('form', {
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			border: false,
			bodyPadding: 10,

			fieldDefaults: {
				labelAlign: 'top',
				labelWidth: 100,
				labelStyle: 'font-weight:bold'
			},
			dockedItems: [{
				xtype: 'container',
				dock: 'top',
				layout: {
					type: 'hbox',
					align: 'middle'
				},
				padding: '10 10 5',
				items: [{
					xtype: 'component',
					html: 'OUTGOING CALL',
					flex: 1,
					cls: 'popupHeader'
				}, {
					xtype: 'button',
					iconCls: 'endCall',
					scale: 'large',
					text: 'End Call',
					handler: function () {
						this.up('.window').close();
					}
				}]
			},{
				xtype: 'container',
				dock: 'top',
				layout: {
					type: 'hbox',
					align: 'middle'
				},
				padding: '10 10 5',
				items: [{
					xtype: 'component',
					flex: 1,
				}, {
					xtype: 'button',
					width: 250,
					text: 'SET CUSTOMER AS DND'
				}]
			},{
				xtype: 'container',
				dock: 'right',
				layout: {
					type: 'vbox',
					align: 'middle'
				},
				padding: '10 10 5',
				items: [{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F2 - Not Interested'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F3 - Advance Booking',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F4 - Call Back',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F5 - Complaint',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F6 - General Enquiry',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F7 - Order',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F9 - Other Language',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F10 - Non-Sale Call',
					margin: '5 0 0 0'
				},{
					xtype: 'button',
					width: 150,
					cls: "leftAlignBtn",
					text: 'F11 - Order Enquiry',
					margin: '5 0 0 0'
				}]
			}],
			items: [
				{
					xtype: 'fieldset',
					collapsible: false,
					defaults: {
						labelWidth: 89,
						anchor: '100%',
						layout: {
							type: 'hbox',
							defaultMargins: {top: 5, right: 0, bottom: 0, left: 5}
						},
						hideLabel: true
					},
					items: [
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Name',
									margins: '10 10 0 0',
									width: 70
								},
								{
									width: 65,
									xtype: 'combo',
									mode: 'local',
									value: 'mrs',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'title',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local',
									store: Ext.create('Ext.data.Store', {
										fields : ['name', 'value'],
										data : [
											{name : 'Mr',   value: 'mr'},
											{name : 'Mrs',  value: 'mrs'},
											{name : 'Miss', value: 'miss'}
										]
									})
								},
								{
									xtype: 'textfield',
									width : 150,
									name : 'name'
								},
								{
									xtype: 'label',
									text: 'Gender',
									margins: '10 10 0 10',
									width: 70
								},
								{
									flex: 1,
									xtype: 'combo',
									mode: 'local',
									value: 'female',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'title',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local',
									store: Ext.create('Ext.data.Store', {
										fields : ['name', 'value'],
										data   : [
											{name : 'Male',   value: 'male'},
											{name : 'Female',  value: 'female'}
										]
									})
								}
							]
						},
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Product',
									margins: '10 10 0 0',
									width: 70
								},
								{
									width: 220,
									xtype: 'combo',
									mode: 'local',
									value: '',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'title',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local',
									store: Ext.create('Ext.data.Store', {
										fields : ['name', 'value'],
										data   : [
											
										]
									})
								},
								{
									xtype: 'label',
									text: 'Phone No',
									margins: '10 10 0 10',
									width: 70
								},
								{
									xtype: 'textfield',
									flex: 1,
									name : 'phoneNo'
								},
								{
									xtype: 'button',
									width: 30,
									cls: 'addbutton'
								},
								{
									xtype: 'button',
									width: 30,
									cls: 'searchbutton'
								}
							]
						},
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Address',
									margins: '10 10 0 0',
									width: 70
								},
								{
									xtype: 'fieldcontainer',
									items : [
										{
											xtype: 'textfield',
											width : 220,
											name : 'address1'
										},
										{
											xtype: 'textfield',
											width : 220,
											name : 'address1'
										},
										{
											xtype: 'textfield',
											width : 220,
											name : 'address1'
										}
									]
								},
								{
									xtype: 'fieldcontainer',
									flex: 1,
									items : [
										{
											width: 265,
											xtype: 'fieldset',
											collapsible: false,
											margin: '0 0 2 0',
											items: [
												{
													xtype: 'button',
													width: 30,
													cls: 'phone1button',
													margin: '1 0 1 0'
												},
												{
													xtype: 'button',
													width: 30,
													cls: 'closebutton',
													margin: '1 0 1 5'
												},
												{
													xtype: 'button',
													width: 30,
													cls: 'crossbutton',
													margin: '1 0 1 5'
												},
												{
													xtype: 'button',
													width: 30,
													cls: 'phone2button',
													margin: '1 0 1 5'
												},
												{
													xtype: 'button',
													width: 30,
													cls: 'greenbutton',
													margin: '1 0 1 5'
												},
												{
													xtype: 'button',
													width: 30,
													cls: 'greybutton',
													margin: '1 0 1 5'
												}
											]
										},
										{
											width: 265,
											xtype: 'combo',
											mode: 'local',
											value: '',
											triggerAction: 'all',
											forceSelection: true,
											editable: false,
											name: 'title',
											displayField: 'name',
											valueField: 'value',
											queryMode: 'local',
											store: Ext.create('Ext.data.Store', {
												fields : ['name', 'value'],
												data   : [
												]
											})
										}/*,
										{
											width: 265,
											xtype: 'textareafield',
											name: 'textarea1'
										}*/
									]
								}
							]
						},
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Primary No',
									margins: '10 10 0 0',
									width: 70
								},
								{
									xtype: 'textfield',
									width : 220,
									name : 'primaryNumber'
								},
								{
									xtype: 'label',
									text: 'E-Mail',
									margins: '10 10 0 10',
									width: 70
								},
								{
									xtype: 'textfield',
									flex: 1,
									name : 'email'
								}
							]
						},
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'City',
									margins: '10 10 0 0',
									width: 70
								},
								{
									width: 220,
									xtype: 'combo',
									mode: 'local',
									value: '',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'city',
									id: 'cityCombo',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local'									
								},
								{
									xtype: 'label',
									text: 'State',
									margins: '10 10 0 10',
									width: 70
								},
								{
									flex: 1,
									xtype: 'combo',
									mode: 'local',
									value: '',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'state',
									id: 'stateCombo',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local'
								}
							]
						},
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Countrry',
									margins: '10 10 0 0',
									width: 70
								},
								{
									width: 220,
									xtype: 'combo',
									mode: 'local',
									value: '',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'country',
									id: 'countryCombo',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local'
								},
								{
									xtype: 'label',
									text: 'Pin Code',
									margins: '10 10 0 10',
									width: 70
								},
								{
									xtype: 'textfield',
									flex: 1,
									name : 'pinCode',
									listeners: {
										'change': function(){
											if(this.value == 600082){
												Ext.Ajax.request({
													url: 'pinRespons.json',
													beforerequest: function(conn, opt){
														
													},
													success: function(response, opts) {
														//var obj = Ext.decode(response.responseText);
														var obj = JSON.parse(response.responseText);
														pinResponseArr = obj;
														var cityData = [];
														var stateData = [];
														var cityArr = [];
														var stateArr = [];
														for (var i = 0; i < pinResponseArr.length; i++) {
															cityArr.push(pinResponseArr[i].city);
															stateArr.push(pinResponseArr[i].state);
														}
														cityArr = Ext.Array.unique(cityArr);
														stateArr = Ext.Array.unique(stateArr);
														for (var i = 0; i < cityArr.length; i++) {
															cityData.push({'name': cityArr[i], 'value':cityArr[i]});
														}
														for (var i = 0; i < stateArr.length; i++) {
															stateData.push({'name': stateArr[i], 'value':stateArr[i]});
														}
														var cityStore = Ext.create('Ext.data.Store', {
															fields: ['name','value'],
															data : cityData
														});
														Ext.getCmp('cityCombo').bindStore(cityStore);
														Ext.getCmp('cityCombo').setValue(cityArr[0]);
														var stateStore = Ext.create('Ext.data.Store', {
															fields: ['name','value'],
															data : stateData
														});
														Ext.getCmp('stateCombo').bindStore(stateStore);
														Ext.getCmp('stateCombo').setValue(stateArr[0]);
														var countryStore = Ext.create('Ext.data.Store', {
															fields: ['name','value'],
															data : [{name: 'India', value: 'India'}]
														});
														Ext.getCmp('countryCombo').bindStore(countryStore);
														Ext.getCmp('countryCombo').setValue('India');
													},
													failure: function(response, opts) {
														console.log(response.status);
													},
													requestcomplete: function(conn, response, opt){
													
													},
													requestexception: function(conn, response, opt){
													
													}
												});
											}
											else{
												var cityData = [];
												var stateData = [];
												var stateStore = Ext.create('Ext.data.Store', {
													fields: ['name','id'],
													data : stateData
												});
												Ext.getCmp('stateCombo').bindStore(stateStore);
												Ext.getCmp('stateCombo').setValue('');
												var cityStore = Ext.create('Ext.data.Store', {
													fields: ['name','id'],
													data : cityData
												});
												Ext.getCmp('cityCombo').bindStore(cityStore);
												Ext.getCmp('cityCombo').setValue('');
												var countryStore = Ext.create('Ext.data.Store', {
													fields: ['name','value'],
													data : []
												});
												Ext.getCmp('countryCombo').bindStore(countryStore);
												Ext.getCmp('countryCombo').setValue();
											}
										}
									}
								},
								{
									xtype: 'button',
									width: 60,
									iconCls: 'savebutton',
									text: 'Save'
								}
							]
						}
					]
				},
				{
					xtype: 'fieldset',
					collapsible: false,
					defaults: {
						labelWidth: 89,
						anchor: '100%',
						layout: {
							type: 'hbox',
							defaultMargins: {top: 5, right: 0, bottom: 0, left: 5}
						},
						hideLabel: true
					},
					items: [
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'label',
									text: 'Language',
									margins: '10 10 0 0',
									width: 70
								},
								{
									width: 220,
									xtype: 'combo',
									mode: 'local',
									value: '',
									triggerAction: 'all',
									forceSelection: true,
									editable: false,
									name: 'title',
									displayField: 'name',
									valueField: 'value',
									queryMode: 'local',
									store: Ext.create('Ext.data.Store', {
										fields : ['name', 'value'],
										data   : [
											
										]
									})
								}
							]
						}
					]
				},
				{
					xtype: 'fieldset',
					collapsible: false,
					defaults: {
						labelWidth: 89,
						anchor: '100%',
						layout: {
							type: 'hbox',
							defaultMargins: {top: 5, right: 0, bottom: 0, left: 5}
						},
						hideLabel: true
					},
					items: [
						{
							xtype : 'fieldcontainer',
							defaults: {
								hideLabel: true
							},
							items : [
								{
									xtype: 'radiogroup',
									flex: 1,
									cls: 'x-check-group-alt',
									items: [
										{boxLabel: 'Call History', name: 'rb-newCall', inputValue: 1},
										{boxLabel: 'Order History', name: 'rb-newCall', inputValue: 2},
										{boxLabel: 'Communication', name: 'rb-newCall', inputValue: 3},
										{boxLabel: 'Last Offer', name: 'rb-newCall', inputValue: 4}
									]
								}
							]
						}
					]
				}
			]
		});

		win = Ext.widget('window', {
			title: 'New Call Information',
			closeAction: 'hide',
			width: 800,
			height: 600,
			layout: 'fit',
			modal: true,
			items: showNewCallForm,
			defaultFocus: 'firstName'
		});
	}
	win.show();
}