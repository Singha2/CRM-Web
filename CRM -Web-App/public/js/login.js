Ext.require([
    'Ext.form.*',
    'Ext.tip.QuickTipManager'
]);

Ext.onReady(function() {

    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
		form;
    Ext.tip.QuickTipManager.init();

	var form = Ext.widget('form', {
		renderTo: Ext.get('customLoginDiv'),
		frame: false,
		width: 300,
		height: 131,
		bodyPadding: 10,
		border: false,

		fieldDefaults: {
			labelWidth: 110,
            labelAlign: 'left'
		},
		items: [{
			name: 'userName',
			itemId: 'userName',
			xtype: 'textfield',
			fieldLabel: 'User Name',
			afterLabelTextTpl: required,
			allowBlank: false
		}, {
			name: 'password',
			itemId: 'password',
			xtype: 'textfield',
			inputType: 'password',
			fieldLabel: 'Password',
			afterLabelTextTpl: required,
			allowBlank: false
		}],
		buttons: [{
			text: 'Login',
			handler: function() {
				if (this.up('form').getForm().isValid()) {
					// In a real application, this would submit the form to the configured url
					// this.up('form').getForm().submit();
					this.up('form').getForm().reset();
					Ext.MessageBox.alert('Thank you!', 'Logged in to account');
				}
			}
		}]
	});
	form.show();
	
	var panel = Ext.widget('panel', {
		renderTo: Ext.get('customBtnDiv'),
		width: 160,
		frame: false,
		bodyPadding: 10,
		border: false,

		items: [{
			xtype: 'button',
			text: 'Button 1',
			width: 140,
			handler: function() {
				Ext.MessageBox.alert('Thank you!', 'Button 1');
			}
		}, {
			xtype: 'button',
			text: 'Button 2',
			width: 140,
			margin: "5 0 0 0",
			handler: function() {
				Ext.MessageBox.alert('Thank you!', 'Button 2');
			}
		}, {
			xtype: 'button',
			text: 'Button 3',
			width: 140,
			margin: "5 0 0 0",
			handler: function() {
				Ext.MessageBox.alert('Thank you!', 'Button 3');
			}
		}, {
			xtype: 'button',
			text: 'Button 4',
			width: 140,
			margin: "5 0 0 0",
			handler: function() {
				Ext.MessageBox.alert('Thank you!', 'Button 4');
			}
		}]
	});
	panel.show();
});