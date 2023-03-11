import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./dataTable.scss";

export const userColumns = [
	{ field: "id", headerName: "ID", width: 100, headerAlign: "center", align: "center" },
	{
		field: "user",
		headerName: "User",
		width: 300,
		renderCell: params => {
			return <div className="cellWithImg">{params.row.username}</div>;
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 300,
		headerAlign: "center",
		align: "center",
	},

	{
		field: "age",
		headerName: "Age",
		width: 150,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "status",
		headerName: "Status",
		width: 200,
		renderCell: params => {
			return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
		},
		sortable: false,
		headerAlign: "center",
		align: "center",
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		status: "active",
		email: "email_1@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_2@gmail.com",
		status: "passive",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_3@gmail.com",
		status: "pending",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_4@gmail.com",
		status: "active",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_5@gmail.com",
		status: "passive",
		age: 22,
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_6@gmail.com",
		status: "active",
		age: 15,
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_7@gmail.com",
		status: "passive",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_8@gmail.com",
		status: "active",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_9@gmail.com",
		status: "pending",
		age: 65,
	},
	{
		id: 10,
		username: "Arya",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_10@gmail.com",
		status: "active",
		age: 25,
	},
];

const DataTable = () => {
	const [data, setData] = useState(userRows);

	const deleteUserHandler = id => {
		const filteredUsers = data.filter(user => user.id !== id);
		setData(filteredUsers);
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 300,
			renderCell: params => {
				return (
					<div className="cellAction">
						<Link to="/" style={{ textDecoration: "none" }}>
							<Button onClick={e => e.preventDefault()}>View</Button>
						</Link>

						<Button color="error" onClick={() => deleteUserHandler(params.row.id)}>
							Delete
						</Button>
					</div>
				);
			},
			sortable: false,
			headerAlign: "center",
			align: "center",
		},
	];

	return (
		<div className="datatable">
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[]}
				checkboxSelection
				autoHeight={true}
				disableColumnMenu={true}
			/>
		</div>
	);
};

export default DataTable;
