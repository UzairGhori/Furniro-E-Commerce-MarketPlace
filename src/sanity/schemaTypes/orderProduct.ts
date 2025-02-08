const orderSchema = {
    name: 'Order',
   type: 'document',
   title: 'Order',
    fields: [
        {
            name: 'FirstName',
            title: 'First Name',
            type:'string'
        },

        {
            name: 'LastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'Email',
            title: 'Email',
            type: 'string',
            validation: (Rule: { email: () => any; }) => Rule.email()
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name : 'city',
            title : 'City',
            type :'string'
        },
        {
            name: 'country',
            title: 'Country',
            type:'string'
        },
        {
            name : 'zipCode',
            title : 'Zip Code',
            type :'string'
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type:'string'
        },
        {
          name :'cartItems',
          title : 'Cart Items',
          type :'array',
          of : [{type:'reference', to:{type :'product'}}]  
        },
        {
            name: 'totalPrice',
            title: 'Total Price',
            type:'number'
        },
        {
            name: 'orderStatus',
            title: 'Order Status',
            type:'string',
            options:{
                list :[
                    {title:'Pending', value:'Pending'},
                    {title:'Shipped', value:'Shipped'},
                    {title:'Delivered',value:'Delivered'}
                ],
                layout : 'radio' 
            },
            InitialValue : 'Pending'
        }


    ]
}

export default orderSchema;