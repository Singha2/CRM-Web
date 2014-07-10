Ext.define('CrmApp.views.MainControlFormPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.MainControlFormPanel',
    renderTo: 'mainControlFormDiv',
	autoHeight: true,
	width   : 310,
	bodyPadding: 5,
	margin: '8 0 0 0',
	items   : [{
		xtype: 'radiogroup',
		cls: 'x-check-group-alt',
		items: [
			{boxLabel: 'Online', name: 'rb-auto', inputValue: 1, checked: true},
			{boxLabel: 'Away', name: 'rb-auto', inputValue: 2, handler: function (field, value) {
					iosocket.emit('AWAY', { hello: 'need break' });
			}},
			{boxLabel: 'Logout', name: 'rb-auto', inputValue: 3, handler: function (field, value) {
					iosocket.emit('LOGOUT', { hello: 'logout' });
					
			}},
			{boxLabel: 'Out. Call', name: 'rb-auto', inputValue: 4, handler: function (field, value) {
					iosocket.emit('MANUALCALL', { hello: 'Calling Customer' });	
			}}
		]
	}]
});