export default {
    data: {
        title: "Hello, pony, Good luck to you , 2021.",
        imageList: ['/common/apple-1.jpg','/common/apple-2.jpg','/common/apple-3.jpg'],
        cartText: 'Add To Cart',
        cartStyle: 'cart-text',
        isCartEmpty: true,
        descriptionFirstParagraph: 'This is the food page including fresh fruit, meat, snack and etc. You can pick whatever you like and add it to your Cart. Your order will arrive within 48 hours. We guarantee that our food is organic and healthy. Feel free to ask our 24h online service to explore more about our platform and products.',
    },
    swipeToIndex(index) {
        this.$element('swiperImage').swipeTo({ index: index });
    },

    addCart() {
        if (this.isCartEmpty) {
            this.cartText = 'Cart + 1';
            this.cartStyle = 'add-cart-text';
            this.isCartEmpty = false;
        }
    },

    getFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text-focus';
        }
    },

    lostFocus() {
        if (this.isCartEmpty) {
            this.cartStyle = 'cart-text';
        }
    },
}
