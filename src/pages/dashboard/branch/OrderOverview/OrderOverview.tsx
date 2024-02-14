import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonHeader from "components/CommonHeader/CommonHeader";

import OrderOverviewCard from "components/OrderOverviewCard/OrderOverviewCard";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

import OrderOverviewCollectedCard from "components/OrderOverviewCard/OrderOverViewCollected";
import OrderOverviewRejectedCard from "components/OrderOverviewCard/OrderOverviewRejected";
import PaginationSection from "components/Pagination/Pagination";
import assest from "json/assest";
import { useEffect, useMemo, useState } from "react";
import { OrderOverviewWrapper } from "styles/StyledComponents/OrderOverViewWrapper";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import {
  CollectedRows,
  PendingRows,
  RejectedRows,
  filter_dataSet,
  infoArray
} from "json/mock/orderoverview.mock";
import CustomSelect from "ui/Filter/CustomSelect";
import Filter1Dropdown from "ui/Filter/Filter1Dropdown";
import OnlineToggleTab from "ui/Filter/OnlineToggletab";
import OrderOverviewFilterTab from "ui/Filter/OrderOverViewFiltertab";
import SortingIcon from "ui/Icons/SortingIcon";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getBranchdetails } from "api/functions/pharmacy-branch-api";
import { BranchorderCount, Orderreceivedlists } from "api/functions/order.api";
import { OrderStatusesEnum, OrderStatusesType } from "typescript/interface/order.interface";
type orderCountinterface = {
  status: string;
  count: number | string;
}

export default function OrderOverview() {
  const [online, setonline] = useState(true);
  const names = ["Ascending", "Descending"];
  const [filterData, setfilterData] = useState("Pending");
  const onDataCallbackFilter = (data: any) => {
    setfilterData(data);
    console.log(data);
  };
  const onDataCallbackToggle = (data: any) => {
    setonline(data === 1);
  };
  const { id } = useParams();
  console.log("Param Id:-", id);

  const { data: branchDetails, isLoading: branchDetailsloading, isError: branchDetailserror } = useQuery({
    queryKey: ["getbranchDetails", { id }],
    queryFn: () => getBranchdetails(Number(id)),
    enabled: !!id
  })
  const { data: orderCountDetails, isLoading, isError: orderCounterror } = useQuery({
    queryKey: ["getordercounts", { id }],
    queryFn: () => BranchorderCount({
      pharmacyBranchId: Number(id),
    }),
    enabled: !!id
  })

  console.log("Single Branch Details:-", branchDetails);
  console.log("Order Count Details:-", orderCountDetails?.data?.data);

  // Order Received Lists fetch
  const { data: orderlists, isLoading: orderlistloading, isError: orderlistserror } = useQuery({
    queryKey: ["orderlists", { id }],
    queryFn: () => Orderreceivedlists(
      {
        pharmacyBranchId: Number(id),
        page: 1,
        length: 5,
        keyword: "",
        sortOrder: "",
        orderStatus: filterData,
        actionPendingBy: ""
      }
    ),
    enabled: !!id
  })

  console.log("All pending Lists:-", orderlists);
  if (isLoading) return <div><LinearProgress color="inherit" /></div>;

  return (
    <Wrapper>
      <Box className="body_layout">
        <OrderOverviewWrapper>
          <Box className="header_wrapper">
            <CommonHeader
              title={"Orders Overview"}
              headerIcon={assest.OrderOverviewIcon}
            >
            </CommonHeader>
          </Box>
          <Box className="header_section">
            <Box className="header_section_left">
              <Box className="pharmacy_name">
                <Typography variant="h2">{branchDetails?.name}</Typography>
                <Button
                  variant="contained"
                  className={online ? "online" : "offline"}
                >
                  <span></span>
                  <Typography variant="body1">
                    {branchDetails?.status === "active" ? "Online" : "Offline"}
                  </Typography>
                </Button>
              </Box>
              <Stack direction="row" className="pharmacy_bottom_wrapper">
                <Box className="pharmacy_bottom">
                  {" "}
                  <img src={assest.locationPin} alt="" />
                  <Typography variant="body1">
                    {branchDetails?.address}
                  </Typography>
                </Box>
                <span className="empty_span">|</span>
                <Box className="pharmacy_bottom">
                  {" "}
                  <img src={assest.info_grey} alt="" />
                  <Typography variant="body1">
                    You’re close to receive order
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box className="header_section_right">
              {
                orderCountDetails?.data.data.map((item: any, key: number) => {
                  return (
                    <>
                      <Box className="maininfobox">
                        <Box className="infobox">
                          <Typography variant="h3">{item?.collectedCount || 0}</Typography>
                          <Box className="infoboxicon">
                            <CheckCircleOutlineIcon style={{ fontSize: "25px", color: "lightgreen" }} />
                            <Typography variant="h4">Collected</Typography>
                          </Box>
                        </Box>
                        <Box className="infobox">
                          <Typography variant="h3">{item?.pendingCount || 0}</Typography>
                          <Box className="infoboxicon">
                            <AccessAlarmsIcon style={{ fontSize: "25px", color: "orange" }} />
                            <Typography variant="h4">Pending</Typography>
                          </Box>
                        </Box>
                        <Box className="infobox">
                          <Typography variant="h3">{item?.rejectedCount || 0}</Typography>
                          <Box className="infoboxicon">
                            <HighlightOffIcon style={{ fontSize: "25px", color: "red" }} />
                            <Typography variant="h4">Rejected</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )
                })
              }
            </Box>
          </Box>
          <Box className="filter_wrapper">
            <Box className="filter_left">
              <Filter1Dropdown
                dataset={filter_dataSet}
                onDataCallback={onDataCallbackFilter}
              />
              <CustomSelect
                IconComponent={(props) => {
                  return <IconButton {...props}>{<SortingIcon />}</IconButton>;
                }}
                className="form_select"
                defaultValue=""
                displayEmpty
              >
                <MenuItem value="">Sort</MenuItem>
                {names.map((name) => (
                  <MenuItem key={name} value={name} className="menu_item">
                    {name}
                  </MenuItem>
                ))}
              </CustomSelect>

              {filterData === "Pending" && (
                <Box className="filter_tab">
                  <OrderOverviewFilterTab />
                </Box>
              )}
            </Box>

            <Box className="filter_right">
              <InputFieldCommon
                placeholder="Search orders.."
                adorMentIcon={<SearchRoundedIcon />}
              />
            </Box>
          </Box>

          {filterData === "Pending"
            ? PendingRows.map((row) => (
              <OrderOverviewCard
                prescription_id={row.prescription_id}
                patient_details={row.patient_details}
                medicine_details={row.medicine_details}
                total={row.total}
                pending={row.pending}
                expires_in={row.expires_in}
              />
            ))
            : filterData === "Collected"
              ? CollectedRows.map((row) => (
                <OrderOverviewCollectedCard
                  prescription_id={row.prescription_id}
                  patient_details={row.patient_details}
                  medicine_details={row.medicine_details}
                  total={row.total}
                  collection_schedule_at={row.collection_schedule_at}
                  accepted_at={row.accepted_at}
                />
              ))
              : RejectedRows.map((row) => (
                <OrderOverviewRejectedCard
                  prescription_id={row.prescription_id}
                  patient_details={row.patient_details}
                  medicine_details={row.medicine_details}
                  total={row.total}
                  cancelled_at={row.cancelled_at}
                  reason={row.reason}
                />
              ))}
        </OrderOverviewWrapper>
        <PaginationSection />
      </Box>
    </Wrapper>
  );
}

export function InfoBox(
  count: string,
  icon: string | JSX.Element,
  bottomText: string
) {
  return (
    <Box className="info_buttons">
      <Typography variant="h5">{count}</Typography>
      <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={0.5}>
        {typeof icon === "string" ? <img src={icon} alt="" /> : icon}
        <Typography variant="body1">{bottomText}</Typography>
      </Stack>
    </Box>
  );
}


export function InfoBox2(props: {
  count: number | string;
  status: OrderStatusesType;
}) {
  const { count, status } = props;
  const icon = useMemo(() => {
    if (status === OrderStatusesEnum.pending) return assest.clock_ylw;
    if (status === OrderStatusesEnum.accepted) return assest.accepted;
    if (status === OrderStatusesEnum.collected) return assest.accepted;
    if (status === OrderStatusesEnum.rejected) return assest.rejected;
    if (status === OrderStatusesEnum.cancelled) return assest.rejected;
  }, [status]);
  return (
    <Box className="info_buttons">
      <Typography variant="h5">{count}</Typography>

      <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={0.5}>
        <img src={icon} alt="" />
        <Typography textTransform="capitalize" variant="body1">
          {status}
        </Typography>
      </Stack>
    </Box>
  );
}
