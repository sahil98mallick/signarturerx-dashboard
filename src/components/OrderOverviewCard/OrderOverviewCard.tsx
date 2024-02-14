import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  TableFooter,
  Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import assest from "json/assest";
import * as React from "react";
import { Link } from "react-router-dom";
import { TableWrapper } from "styles/StyledComponents/OrderOverViewCardWrapper";

import { PendingPrescriptionData } from "typescript/interface/order_overview_table.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

const OrderOverviewCard = ({
  prescription_id,
  patient_details,
  medicine_details,
  total,
  pending,
  expires_in,
  onAccept,
  onCancel
}: PendingPrescriptionData) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Prescription ID</TableCell>
              <TableCell align="left">Patient Detail</TableCell>
              <TableCell align="left">Medicine Detail</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={prescription_id?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <Box className="prescription">
                  <Typography variant="h6">{prescription_id?.id}</Typography>
                  <Box className="date_box">
                    <img src={assest.calender} alt="" />
                    <Typography variant="body1">
                      {prescription_id?.date}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box className="patient_details">
                  <Typography variant="body1">
                    {patient_details?.name}
                  </Typography>
                  <Box className="call_box">
                    <img src={assest.callIcon} alt="" />

                    <Link to="/">{patient_details?.conatct} </Link>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                {medicine_details?.map((med, index) => {
                  return (
                    <>
                      <Box
                        className="medicine_details"
                        sx={{
                          display:
                            index > 1 ? "none !important" : "flex !important"
                        }}
                      >
                        <Typography variant="caption">{med.number}</Typography>{" "}
                        <span className="icon_wrap">
                          {" "}
                          <CloseIcon fontSize="small" />
                        </span>{" "}
                        <Typography variant="caption">
                          {med.medicine_name}
                        </Typography>
                      </Box>
                    </>
                  );
                })}
                <Box className="medicine_details medicine_details_extra">
                  <Button
                    type="button"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {medicine_details?.length! - 2} More items...
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                    className="medicine_menu"
                  >
                    {medicine_details?.map((med, index) => {
                      return (
                        <MenuItem onClick={handleClose} key={index}>
                          <Box className="medicine_details">
                            <Typography variant="caption">
                              {med.number}
                            </Typography>{" "}
                            <span className="icon_wrap">
                              {" "}
                              <CloseIcon fontSize="small" />
                            </span>{" "}
                            <Typography variant="caption">
                              {med.medicine_name}
                            </Typography>
                          </Box>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box className="total">
                  <Typography variant="body1">£{total?.amount}</Typography>
                  <Box className="paid">
                    {" "}
                    <img src={assest.tickIconCyan} alt="" />
                    <Typography variant="body1">
                      {total?.paid && "Orders Paid"}
                    </Typography>
                  </Box>
                  <Box></Box>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box className="action_button">
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    buttonType="small"
                    endIcon={<ArrowForwardIcon />}
                  >
                    <Typography variant="body1">View</Typography>
                  </CustomButtonPrimary>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <Box className="pending">
                  <img src={assest.clockMaroon} alt="" />
                  <Typography variant="body1">Pending : {pending}</Typography>
                </Box>{" "}
              </TableCell>

              <TableCell>
                {" "}
                <Box className="expire">
                  <img src={assest.infoCircleRed} alt="" />
                  <Typography variant="body1">
                    Expires in {expires_in}
                  </Typography>
                </Box>{" "}
              </TableCell>
              <TableCell colSpan={3} align="right">
                <Box className="tableFooter_right">
                  <CustomButtonPrimary
                    variant="contained"
                    color="secondary"
                    buttonType="small"
                    endIcon={<CloseIcon />}
                    onClick={onCancel}
                  >
                    <Typography variant="body1">Cancel</Typography>
                  </CustomButtonPrimary>
                  <CustomButtonPrimary
                    variant="contained"
                    color="success"
                    buttonType="small"
                    endIcon={<DoneIcon />}
                    onClick={onAccept}
                  >
                    <Typography variant="body1">Accept</Typography>
                  </CustomButtonPrimary>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default OrderOverviewCard;
