import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} sx={{ mt: "16px" }}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List Of Invoice Balances" />
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none !important",
          },
          "& .MuiDataGrid-cell": {
            border: "none !important",
          },
          "& .name-column--cell": {
            color: `${colors.greenAccent[300]} !important`,
          },
          "& .MuiDataGrid-columnHeader": {
            border: "none !important",
            backgroundColor: `${colors.blueAccent[700]} !important`,
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: `${colors.primary[400]}  !important`,
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none !important",
            backgroundColor: `${colors.blueAccent[700]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
