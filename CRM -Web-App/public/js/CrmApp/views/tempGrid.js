function addTempGrid() {
	var myData = [
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '145', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT I', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:10:23 AM', '06/28/2014 06:12:10 AM', 'EXT7143', '107', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:16:55 AM', '06/28/2014 06:18:00 AM', 'EXT7143', '64', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '33', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '17', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '13', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '698', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Call Back', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '145', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT I', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:10:23 AM', '06/28/2014 06:12:10 AM', 'EXT7143', '107', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:16:55 AM', '06/28/2014 06:18:00 AM', 'EXT7143', '64', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '33', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '17', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '13', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '698', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Call Back', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '145', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT I', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:10:23 AM', '06/28/2014 06:12:10 AM', 'EXT7143', '107', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:16:55 AM', '06/28/2014 06:18:00 AM', 'EXT7143', '64', 'Mr. IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '33', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '17', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '13', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '698', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Call Back', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '13', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Non Sale Call', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call'],
		['06/28/2014 06:07:05 AM', '06/28/2014 06:09:30 AM', 'EXT7141', '698', 'Mr. TELEBUY IT SUPPORT', '9962996287', 'ALT O', 'NA', 'NA', 'Call Back', 'STAFF CALL', 'ADMINISTRATOR', '', '', 'NA', 'TAMIL', 'NA', 'STAFF CALL: test call']
	];

	// create the Data Store
	var store = Ext.create('Ext.data.ArrayStore', {
		fields: [
			{name: 'callStart'},
			{name: 'callEnd'},
			{name: 'extn'},
			{name: 'duration'},
			{name: 'customer'},
			{name: 'phoneNum'},
			{name: 'source'},
			{name: 'product'},
			{name: 'option'},
			{name: 'disposition'},
			{name: 'reasons'},
			{name: 'rep'},
			{name: 'team'},
			{name: 'subTeam'},
			{name: 'media'},
			{name: 'lang'},
			{name: 'transferred'},
			{name: 'notes'}
		],
		data: myData
	});
	var gridHeight = Ext.getBody().getViewSize().height - 260;
	// create the grid
	var grid = Ext.create('Ext.grid.Panel', {
		store: store,
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
		renderTo: 'complaintGrid',
		height: gridHeight,
		width: 'auto'
	});
}