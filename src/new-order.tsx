// Now, Only VISA image is showing in payment method part
// TODO: Get Payment menthod's image (card type image) and show it.

import { NewOrderEmailTemplateProps, OrderItemProps } from "./types/Orders";

export const NewOrderEmailTemplate = ({ data }: NewOrderEmailTemplateProps) => {

    const Address = ({ address, city, country, zip, phone }: any) => {
        return (
            <>
                {address}
                <br />
                {city}, {country}
                <br />
                {zip}
                <br />
                {phone}
            </>);
    }

    const OrderItem = ({ data , currency_symbol}: OrderItemProps) => {
        const discount = data.mrp - data.price;
        const isDiscounted = discount > 0;
        const discountedPrice = data.mrp - discount;
        return (
            <>
                <tr>
                    <td height={20}>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <table
                            border={0}
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            align="center"
                        >
                            <tbody>
                                <tr>
                                    <td width={130}>
                                        <img
                                            width={130}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                maxWidth: 130
                                            }}
                                            alt="img"
                                            src={data.img}
                                        />
                                    </td>
                                    <td width={20}>&nbsp;</td>
                                    <td width={250}>
                                        <table
                                            border={0}
                                            width="100%"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 18,
                                                            color: "#070606",
                                                            lineHeight: 21
                                                        }}
                                                    >
                                                        {data.name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 14,
                                                            color: "#070606",
                                                            lineHeight: 21
                                                        }}
                                                    >
                                                        Quantitiy : {data.qty}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td align="right" width={60}>
                                        <table
                                            border={0}
                                            width={60}
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        align="right"
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 18,
                                                            color: "#070606"
                                                        }}
                                                    >
                                                        {currency_symbol || "$"}{isDiscounted ? discountedPrice : data.mrp}
                                                    </td>
                                                </tr>
                                                {isDiscounted && (
                                                    <tr>
                                                        <td
                                                            align="right"
                                                            style={{
                                                                fontFamily:
                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                fontSize: 14,
                                                                color: "#5d5d5d",
                                                                textDecoration:
                                                                    "line-through"
                                                            }}
                                                        >
                                                            {currency_symbol || "$"}{data.total}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td
                        height={20}
                        style={{
                            borderBottom: "1px solid #e0e0e0"
                        }}
                    >
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td height={20}>&nbsp;</td>
                </tr>
            </>
        );
    }

    return (
        <>
            <table
                style={{ width: "100%", maxWidth: "100%" }}
                width="100%"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                align="center">
                <tbody>
                    <tr>
                        <td bgcolor="#F4F4F4" align="center">
                            {/*container*/}
                            <table
                                className="row"
                                style={{ width: 600, maxWidth: 600 }}
                                width={600}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                                align="center">
                                <tbody>
                                    <tr>
                                        <td bgcolor="#070606" align="center">
                                            {/*wrapper*/}
                                            <table
                                                className="row"
                                                style={{ width: 540, maxWidth: 540 }}
                                                width={540}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                                align="center"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td className="container-padding" align="center">
                                                            {/* content container */}
                                                            <table
                                                                width={540}
                                                                border={0}
                                                                cellPadding={0}
                                                                cellSpacing={0}
                                                                align="center"
                                                                className="row"
                                                                style={{ width: 540, maxWidth: 540 }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            {/* content */}
                                                                            <table
                                                                                border={0}
                                                                                width="100%"
                                                                                cellPadding={0}
                                                                                cellSpacing={0}
                                                                                align="center"
                                                                                style={{ width: "100%", maxWidth: "100%" }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table
                                                                                                border={0}
                                                                                                width="100%"
                                                                                                cellPadding={0}
                                                                                                cellSpacing={0}
                                                                                                align="center"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td width={100} align="left">
                                                                                                            <img
                                                                                                                width={100}
                                                                                                                style={{
                                                                                                                    display: "block",
                                                                                                                    width: "100%",
                                                                                                                    maxWidth: 100,
                                                                                                                    paddingBottom: 10,
                                                                                                                    paddingTop: 10
                                                                                                                }}
                                                                                                                alt="img"
                                                                                                                src="https://zapvi.in/wp-content/uploads/2024/02/Zapvi-Logo-Light.svg"
                                                                                                            />
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#ffffff"
                                                                                                            }}
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://zapvi.in"
                                                                                                                target="_blank"
                                                                                                                style={{ color: "#ffffff" }}
                                                                                                            >
                                                                                                                Help Center
                                                                                                            </a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/*module*/}
            <table
                style={{ width: "100%", maxWidth: "100%" }}
                width="100%"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                align="center"
            >
                <tbody>
                    <tr>
                        <td bgcolor="#F4F4F4" align="center">
                            {/*container*/}
                            <table
                                className="row"
                                style={{ width: 600, maxWidth: 600 }}
                                width={600}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                                align="center"
                            >
                                <tbody>
                                    <tr>
                                        <td bgcolor="#ffffff" align="center">
                                            {/*wrapper*/}
                                            <table
                                                className="row"
                                                style={{ width: 540, maxWidth: 540 }}
                                                width={540}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                                align="center"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td className="container-padding" align="center">
                                                            {/* content container */}
                                                            <table
                                                                width={540}
                                                                border={0}
                                                                cellPadding={0}
                                                                cellSpacing={0}
                                                                align="center"
                                                                className="row"
                                                                style={{ width: 540, maxWidth: 540 }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            {/* content */}
                                                                            <table
                                                                                border={0}
                                                                                width="100%"
                                                                                cellPadding={0}
                                                                                cellSpacing={0}
                                                                                align="center"
                                                                                style={{ width: "100%", maxWidth: "100%" }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height={40}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center">
                                                                                            <img
                                                                                                width={100}
                                                                                                style={{
                                                                                                    display: "block",
                                                                                                    width: "100%",
                                                                                                    maxWidth: 100
                                                                                                }}
                                                                                                alt="img"
                                                                                                src="http://emailmug.com/premium-template/emailpaws/notif/cr.png"
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={20}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 15,
                                                                                                color: "#070606"
                                                                                            }}
                                                                                        >
                                                                                            Hi {data.store_owner_name},
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={18}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 30,
                                                                                                color: "#070606"
                                                                                            }}
                                                                                        >
                                                                                            New Order Placed
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={18}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 24,
                                                                                                color: "#070606"
                                                                                            }}
                                                                                        >
                                                                                            {data.customer_first_name} placed a new order with
                                                                                            your store,
                                                                                            <br />
                                                                                            <strong>
                                                                                                <span style={{ fontSize: 15 }}>
                                                                                                    {data.order_date}
                                                                                                </span>
                                                                                            </strong>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={18}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 15,
                                                                                                color: "#070606",
                                                                                                textDecoration: "underline"
                                                                                            }}
                                                                                        >
                                                                                            <a
                                                                                                href={data.order_url}
                                                                                                target="_blank"
                                                                                                style={{ color: "#070606" }}
                                                                                            >
                                                                                                <u>VIEW ORDER</u>
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={30}>&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/*module*/}
            <table
                style={{ width: "100%", maxWidth: "100%" }}
                width="100%"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                align="center"
            >
                <tbody>
                    <tr>
                        <td bgcolor="#F4F4F4" align="center">
                            {/*container*/}
                            <table
                                className="row"
                                style={{ width: 600, maxWidth: 600 }}
                                width={600}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                                align="center"
                            >
                                <tbody>
                                    <tr>
                                        <td bgcolor="#FFFFFF" align="center">
                                            {/*wrapper*/}
                                            <table
                                                className="row"
                                                style={{ width: 540, maxWidth: 540 }}
                                                width={540}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                                align="center"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td className="container-padding" align="center">
                                                            {/* content container */}
                                                            <table
                                                                width={540}
                                                                border={0}
                                                                cellPadding={0}
                                                                cellSpacing={0}
                                                                align="center"
                                                                className="row"
                                                                style={{ width: 540, maxWidth: 540 }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            {/* content */}
                                                                            <table
                                                                                border={0}
                                                                                width="100%"
                                                                                cellPadding={0}
                                                                                cellSpacing={0}
                                                                                align="center"
                                                                                style={{ width: "100%", maxWidth: "100%" }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                lineHeight: 15,
                                                                                                height: 15,
                                                                                                fontSize: 0
                                                                                            }}
                                                                                        >
                                                                                            &nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table
                                                                                                border={0}
                                                                                                width="100%"
                                                                                                cellPadding={0}
                                                                                                cellSpacing={0}
                                                                                                align="center"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            Order Code #{data.order_no}
                                                                                                        </td>
                                                                                                        <td width={30}>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            Items Price
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            height={20}
                                                                                            style={{
                                                                                                borderBottom: "1px solid #e0e0e0"
                                                                                            }}
                                                                                        >
                                                                                            &nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    {
                                                                                        data.items.map((order, index) => {
                                                                                            return <OrderItem data={order} currency_symbol = {data.currency_symbol || '$'} />
                                                                                        })
                                                                                    }
                                                                                    <tr>
                                                                                        <td height={30}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="right">
                                                                                            <table
                                                                                                border={0}
                                                                                                width={280}
                                                                                                cellPadding={0}
                                                                                                cellSpacing={0}
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606",
                                                                                                                lineHeight: 24
                                                                                                            }}
                                                                                                        >
                                                                                                            Subtotal
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            {data.currency_symbol || "$"}{data.subtotal_amount}
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606",
                                                                                                                lineHeight: 24
                                                                                                            }}
                                                                                                        >
                                                                                                            Shipping
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            {data.currency_symbol || "$"}{data.shipping_charge}
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606",
                                                                                                                lineHeight: 24
                                                                                                            }}>
                                                                                                            Tax
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            {data.currency_symbol || "$"}{data.tax || 0}
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606",
                                                                                                                lineHeight: 24
                                                                                                            }}
                                                                                                        >
                                                                                                            Discount
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            -{data.currency_symbol || "$"}{data.discount}
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 18,
                                                                                                                color: "#070606",
                                                                                                                fontWeight: 600,
                                                                                                                lineHeight: 24
                                                                                                            }}
                                                                                                        >
                                                                                                            Total Due
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 18,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            <strong>{data.currency_symbol || "$"}{data.total_amount}</strong>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606",
                                                                                                                lineHeight: 24
                                                                                                            }}
                                                                                                        >
                                                                                                            &nbsp;
                                                                                                        </td>
                                                                                                        <td>&nbsp;</td>
                                                                                                        {/* <td
                                                                                                            align="right"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 14,
                                                                                                                color: "#070606"
                                                                                                            }}
                                                                                                        >
                                                                                                            you saved{" "}
                                                                                                            <strong>$60.00</strong>
                                                                                                        </td> */}
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                lineHeight: 15,
                                                                                                height: 15,
                                                                                                fontSize: 0
                                                                                            }}
                                                                                        >
                                                                                            &nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/*module*/}
            <table
                style={{ width: "100%", maxWidth: "100%" }}
                width="100%"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                align="center"
            >
                <tbody>
                    <tr>
                        <td bgcolor="#F4F4F4" align="center">
                            {/*container*/}
                            <table
                                className="row"
                                style={{ width: 600, maxWidth: 600 }}
                                width={600}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                                align="center"
                            >
                                <tbody>
                                    <tr>
                                        <td bgcolor="#FFFFFF" align="center">
                                            {/*wrapper*/}
                                            <table
                                                className="row"
                                                style={{ width: 540, maxWidth: 540 }}
                                                width={540}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                                align="center"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td className="container-padding" align="center">
                                                            {/* content container */}
                                                            <table
                                                                width={540}
                                                                border={0}
                                                                cellPadding={0}
                                                                cellSpacing={0}
                                                                align="center"
                                                                className="row"
                                                                style={{ width: 540, maxWidth: 540 }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            {/* content */}
                                                                            <table
                                                                                border={0}
                                                                                width="100%"
                                                                                cellPadding={0}
                                                                                cellSpacing={0}
                                                                                align="center"
                                                                                style={{ width: "100%", maxWidth: "100%" }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                lineHeight: 15,
                                                                                                height: 15,
                                                                                                fontSize: 0
                                                                                            }}
                                                                                        >
                                                                                            &nbsp;
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" bgcolor="#F5F5F3">
                                                                                            {/*[if (gte mso 9)|(IE)]><table border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]*/}
                                                                                            {/* column */}
                                                                                            <table
                                                                                                className="row"
                                                                                                style={{
                                                                                                    width: 260,
                                                                                                    maxWidth: 260
                                                                                                }}
                                                                                                width={260}
                                                                                                cellSpacing={0}
                                                                                                cellPadding={0}
                                                                                                border={0}
                                                                                                align="left"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center">
                                                                                                            {/* content */}
                                                                                                            <table
                                                                                                                width={260}
                                                                                                                style={{
                                                                                                                    width: 260,
                                                                                                                    maxWidth: 260
                                                                                                                }}
                                                                                                                cellSpacing={0}
                                                                                                                cellPadding={0}
                                                                                                                border={0}
                                                                                                                align="center"
                                                                                                            >
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td align="center">
                                                                                                                            <table
                                                                                                                                border={0}
                                                                                                                                width={200}
                                                                                                                                cellPadding={0}
                                                                                                                                cellSpacing={0}
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 18,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            Shipping
                                                                                                                                            Address
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={18}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 13,
                                                                                                                                                color:
                                                                                                                                                    "#070606",
                                                                                                                                                lineHeight: 22
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <Address
                                                                                                                                                address={data.shipping_address.address}
                                                                                                                                                city={data.shipping_address.city}
                                                                                                                                                country={data.shipping_address.country}
                                                                                                                                                zip={data.shipping_address.zip}
                                                                                                                                                phone={data.shipping_address.phone} />
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 18,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            Shipping
                                                                                                                                            Method
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={18}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 13,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            {data.shipping_method || "Priority Mail Express International"}
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            {/*[if (gte mso 9)|(IE)]></td><td><![endif]*/}
                                                                                            {/* gap */}
                                                                                            <table
                                                                                                className="row"
                                                                                                style={{ width: 20, maxWidth: 20 }}
                                                                                                width={20}
                                                                                                cellSpacing={0}
                                                                                                cellPadding={0}
                                                                                                border={0}
                                                                                                align="left"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td height={30} />
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            {/*[if (gte mso 9)|(IE)]></td><td><![endif]*/}
                                                                                            {/* column */}
                                                                                            <table
                                                                                                className="row"
                                                                                                style={{
                                                                                                    width: 260,
                                                                                                    maxWidth: 260
                                                                                                }}
                                                                                                width={260}
                                                                                                cellSpacing={0}
                                                                                                cellPadding={0}
                                                                                                border={0}
                                                                                                align="right"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center">
                                                                                                            {/* content */}
                                                                                                            <table
                                                                                                                width={260}
                                                                                                                style={{
                                                                                                                    width: 260,
                                                                                                                    maxWidth: 260
                                                                                                                }}
                                                                                                                cellSpacing={0}
                                                                                                                cellPadding={0}
                                                                                                                border={0}
                                                                                                                align="center"
                                                                                                            >
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td align="center">
                                                                                                                            <table
                                                                                                                                border={0}
                                                                                                                                width={200}
                                                                                                                                cellPadding={0}
                                                                                                                                cellSpacing={0}
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 18,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            Billing
                                                                                                                                            Address
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={18}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 13,
                                                                                                                                                color:
                                                                                                                                                    "#070606",
                                                                                                                                                lineHeight: 22
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <Address
                                                                                                                                                address={data.billing_address.address}
                                                                                                                                                city={data.billing_address.city}
                                                                                                                                                country={data.billing_address.country}
                                                                                                                                                zip={data.billing_address.zip}
                                                                                                                                                phone={data.billing_address.phone} />
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 18,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            Payment Method
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td height={18}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 13,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >{data.payment_mode}
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    {/* <tr>
                                                                                                                                        <td
                                                                                                                                            style={{
                                                                                                                                                fontFamily:
                                                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                                                fontSize: 13,
                                                                                                                                                color:
                                                                                                                                                    "#070606"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <img
                                                                                                                                                align="left"
                                                                                                                                                src="https://cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                                                                                                                            />
                                                                                                                                            - {formatCardString(data.paymentMethod.cardNumber)}
                                                                                                                                        </td>
                                                                                                                                    </tr> */}
                                                                                                                                    <tr>
                                                                                                                                        <td height={30}>
                                                                                                                                            &nbsp;
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                            {/*[if (gte mso 9)|(IE)]></td></tr></table><![endif]*/}
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={30}>&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/*module*/}
            <table
                style={{ width: "100%", maxWidth: "100%" }}
                width="100%"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                align="center"
            >
                <tbody>
                    <tr>
                        <td bgcolor="#F4F4F4" align="center">
                            {/*container*/}
                            <table
                                className="row"
                                style={{ width: 600, maxWidth: 600 }}
                                width={600}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                                align="center"
                            >
                                <tbody>
                                    <tr>
                                        <td bgcolor="#070606" align="center">
                                            {/*wrapper*/}
                                            <table
                                                className="row"
                                                style={{ width: 540, maxWidth: 540 }}
                                                width={540}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                                align="center"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td className="container-padding" align="center">
                                                            {/* content container */}
                                                            <table
                                                                width={540}
                                                                border={0}
                                                                cellPadding={0}
                                                                cellSpacing={0}
                                                                align="center"
                                                                className="row"
                                                                style={{ width: 540, maxWidth: 540 }}
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            {/* content */}
                                                                            <table
                                                                                border={0}
                                                                                width="100%"
                                                                                cellPadding={0}
                                                                                cellSpacing={0}
                                                                                align="center"
                                                                                style={{ width: "100%", maxWidth: "100%" }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height={40}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 18,
                                                                                                color: "#dadada",
                                                                                                fontWeight: 400
                                                                                            }}
                                                                                        >
                                                                                            Get in Touch
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={20}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table
                                                                                                cellSpacing={0}
                                                                                                cellPadding={0}
                                                                                                border={0}
                                                                                                align="center"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td width={25}>
                                                                                                            <a href="https://www.facebook.com/zapvi.in/">
                                                                                                                <img
                                                                                                                    width={25}
                                                                                                                    style={{
                                                                                                                        display: "block",
                                                                                                                        width: "100%",
                                                                                                                        maxWidth: 25
                                                                                                                    }}
                                                                                                                    src="https://zapvi.in/wp-content/uploads/2024/05/fb.png"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td width={10}>&nbsp;</td>
                                                                                                        <td width={25}>
                                                                                                            <a href="https://twitter.com/Zapviofficial">
                                                                                                                <img
                                                                                                                    width={25}
                                                                                                                    style={{
                                                                                                                        display: "block",
                                                                                                                        width: "100%",
                                                                                                                        maxWidth: 25
                                                                                                                    }}
                                                                                                                    src="https://zapvi.in/wp-content/uploads/2024/05/tw.png"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td width={10}>&nbsp;</td>
                                                                                                        <td width={25}>
                                                                                                            <a href="https://www.instagram.com/zapvi/">
                                                                                                                <img
                                                                                                                    width={25}
                                                                                                                    style={{
                                                                                                                        display: "block",
                                                                                                                        width: "100%",
                                                                                                                        maxWidth: 25
                                                                                                                    }}
                                                                                                                    src="https://zapvi.in/wp-content/uploads/2024/05/in.png"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td width={10}>&nbsp;</td>
                                                                                                        <td width={25}>
                                                                                                            <a href="https://in.pinterest.com/zapvi/">
                                                                                                                <img
                                                                                                                    width={25}
                                                                                                                    style={{
                                                                                                                        display: "block",
                                                                                                                        width: "100%",
                                                                                                                        maxWidth: 25
                                                                                                                    }}
                                                                                                                    src="https://zapvi.in/wp-content/uploads/2024/05/pi.png"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td width={10}>&nbsp;</td>
                                                                                                        <td width={25}>
                                                                                                            <a href="https://www.youtube.com/@zapvi_in">
                                                                                                                <img
                                                                                                                    width={25}
                                                                                                                    style={{
                                                                                                                        display: "block",
                                                                                                                        width: "100%",
                                                                                                                        maxWidth: 25
                                                                                                                    }}
                                                                                                                    src="https://zapvi.in/wp-content/uploads/2024/05/youtube.png"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={20}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            align="center"
                                                                                            style={{
                                                                                                fontFamily:
                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                fontSize: 13,
                                                                                                color: "#dadada",
                                                                                                lineHeight: 19
                                                                                            }}
                                                                                        >
                                                                                            You are receiving this email because
                                                                                            you are subscribed to our mailing
                                                                                            list.
                                                                                            <br />
                                                                                            For any questions please send to
                                                                                            help@zapvi.in
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center">
                                                                                            <table
                                                                                                cellSpacing={0}
                                                                                                cellPadding={0}
                                                                                                border={0}
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            align="center"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#dadada",
                                                                                                                lineHeight: 20,
                                                                                                                textDecoration: "underline"
                                                                                                            }}
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://zapvi.in"
                                                                                                                target="_blank"
                                                                                                                style={{ color: "#dadada" }}
                                                                                                            >
                                                                                                                Subscription
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td
                                                                                                            width={20}
                                                                                                            align="center"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#dadada",
                                                                                                                lineHeight: 20
                                                                                                            }}
                                                                                                        >
                                                                                                            |
                                                                                                        </td>
                                                                                                        <td
                                                                                                            align="center"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#dadada",
                                                                                                                lineHeight: 20,
                                                                                                                textDecoration: "underline"
                                                                                                            }}
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://zapvi.in"
                                                                                                                target="_blank"
                                                                                                                style={{ color: "#dadada" }}
                                                                                                            >
                                                                                                                Privacy Policy
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td
                                                                                                            width={20}
                                                                                                            align="center"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#dadada",
                                                                                                                lineHeight: 20
                                                                                                            }}
                                                                                                        >
                                                                                                            |
                                                                                                        </td>
                                                                                                        <td
                                                                                                            align="center"
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"Roboto", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color: "#dadada",
                                                                                                                lineHeight: 20,
                                                                                                                textDecoration: "underline"
                                                                                                            }}
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://zapvi.in"
                                                                                                                target="_blank"
                                                                                                                style={{ color: "#dadada" }}
                                                                                                            >
                                                                                                                Help Center
                                                                                                            </a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height={40}>&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    );
}