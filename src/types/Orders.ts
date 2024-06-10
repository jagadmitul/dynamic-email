export interface OrderItem {
    name: string,
    img: string,
    price: number,
    mrp: number,
    qty: number,
    total: number,
    currency_symbol?: string,
    product_url?: string,
}

export interface OrderItemProps {
    data: OrderItem;
    currency_symbol: string
}


export interface NewOrderEmailTemplateProps {
    data: {
        store_owner_name: string,
        storeId: string,
        templateId: number,
        toEmail: string,
        order_date: string,
        order_url: string,
        store_logo: string,
        store_name: string,
        order_no: string,
        order_id: string,
        subtotal_amount: number,
        total_amount: number,
        tax?: number,
        shipping_charge: number,
        discount: number,
        storefront_orders_url: string,
        customer_first_name: string,
        customer_last_name: string,
        cardNumber: number,
        payment_mode: string,
        currency_symbol?: string,
        currency_string?: string,
        shipping_method?: string,
        shipping_address: {
            address: string,
            city: string,
            country: string,
            zip: string,
            phone: string
        },
        billing_address: {
            address: string,
            city: string,
            country: string,
            zip: string,
            phone: string
        },
        items: OrderItem[]
    }
};