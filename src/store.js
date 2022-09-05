import { configureStore, createSlice } from '@reduxjs/toolkit';

const product = createSlice({
  name: 'product',
  initialState: {
    image_list: '["30a3cf0b6b712fa6c404e3db14736073.png"]',
    image_detail_list: '["65cab723555afbf633887d4e6de09b29.png"]',
    filename_video: '23a98b6d13aae783a777177062e01f6d.m3u8',
    name: '해블랑표333333',
    sale_type: 'onsale',
    category: '',
    detail_info: '상품소개22222',
    price_original: '10000',
    price_discount: '7000',
    discount_rate: '',
    cancel_info: '교환반품상세22222',
    option_list: '[{"option_id":101,"name":"옵션101","option_price":"0"}]',
    faq_list: '[{"id":1,"title":"질문1","content":"답변1"}]',
    video_content: '상품 내용 추가',
  },
  reducers: {
    registCategory(state, action) {
      state.category = action.payload;
    },
    registName(state, action) {
      state.name = action.payload;
    },
    registPrice_original(state, action) {
      state.price_original = action.payload;
    },
    registPrice_discount(state, action) {
      state.price_discount = action.payload;
    },
    registDiscount_rate(state, action) {
      state.discount_rate = action.payload;
    },
  },
});

export const {
  registCategory,
  registName,
  registPrice_original,
  registPrice_discount,
  registDiscount_rate,
} = product.actions;

export default configureStore({
  reducer: { product: product.reducer },
});
