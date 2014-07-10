var required = '<span class="requiredFld" data-qtip="Required">*</span>', win;
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
				}, {
					xtype: 'button',
					iconCls: 'endCall',
					scale: 'large',
					text: 'End Call'
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
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Name',
				afterLabelTextTpl: required,
				vtype: 'email',
				allowBlank: false
			}, {
				xtype: 'container',
				layout: 'hbox',
				margin: '0 0 10',
				items: [{
					xtype: 'fieldset',
					flex: 1,
					layout: 'anchor',
					defaults: {
						anchor: '100%',
						hideEmptyLabel: false
					},
					items: [{
						xtype: 'textfield',
						name: 'txt-test1',
						fieldLabel: 'Alignment Test'
					}]
				}]
			}]
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