(function() {
    Ext.Loader.setConfig({
        enabled : true,
        paths   : {
            CrmApp : 'js/CrmApp'
        } 
    });
 
    Ext.require('CrmApp.views.UserViewPort');
 
    Ext.onReady(function() {
		Ext.QuickTips.init();
		// NOTE: This is an example showing simple state management. During development,
		// it is generally best to disable state management as dynamically-generated ids
		// can change across page loads, leading to unpredictable results.  The developer
		// should ensure that stable state ids are set for stateful components in real apps.
		Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

        Ext.create('CrmApp.views.UserViewPort').show();
		Ext.create('CrmApp.views.CallFormPanel').show();
		Ext.create('CrmApp.views.MainControlFormPanel').show();
		Ext.create('CrmApp.views.SearchFormPanel').show();
		//Ext.create('CrmApp.views.ComplaintGridPanel').show();
		
		addTempGrid();
		
		
	    iosocket.on('NEWCALL', function(data) {
            	 MsgBus.fireEvent('openPOPUP', data);
            });


	var msgBus = Ext.extend(Ext.util.Observable, {
			  // I don't think it's necessary to declare all events
			  events : {
			    openPOPUP : true
			  }
	});

var MsgBus = new msgBus();

MsgBus.on('openPOPUP', function(tcpData){ 

	var tcpDataStr = tcpData.livedata;
	var custInfoArr = tcpDataStr.split("|");
	console.log(custInfoArr[1]);
	
	Ext.MessageBox.alert(custInfoArr[1], custInfoArr[2]);

});


		var loginForm = Ext.widget('form', {
			frame: false,
			width: 350,
			height: 120,
			bodyPadding: 10,
			border: true,

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
			buttons: [
				{
					text: 'Cancel',
					handler: function() {
						Ext.MessageBox.alert('Thank you!', 'Cancel');
					}
				},
				{
					text: 'Login',
					handler: function() {
						//Ext.MessageBox.alert('Thank you!', 'Logged in to account');
						if (this.up('form').getForm().isValid()) {
						
							var formValues = this.up('form').getForm().getValues();
							iosocket.emit('LOGIN', { userId: formValues.userName });
							loginWin.close();
						
						}
						
					}
				}
			]
		});
		var loginWin = Ext.widget('window', {
			title: 'Agent Authentication',
			closable : false,
			layout: 'fit',
			resizable: false,
			modal: true,
			header: true,
			border: false,
			draggable: false,
			
			items: loginForm,
			defaultFocus: 'userName'
		});
		loginWin.show();
    });
})();