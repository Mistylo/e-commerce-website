import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import hero_imag from './hero_imag.jpg'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'
import cross_icon from './cross_icon.png'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import bin_icon from './bin_icon.png'
import stripe_logo from './stripe_logo.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.jpg'


export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    hero_imag,
    exchange_icon,
    quality_icon,
    support_img,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_logo,
    about_img,
    contact_img
}


export const products = [
    {
        _id: "aaaaa",
        name: "Silk Backless Maxi Dress",
        description: "Backless Maxi Dress from the Queen of the Sea",
        price:100,
        image:['/src/assets/Backless_Maxi_Dress.png'],
        category: "Women",
        subCategory: "One-Piece",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634346448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Pearl White Top Set",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price:60,
        image:['/src/assets/Pearl_White_Top_Set.png', '/src/assets/White_Top.png'],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634346448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Gray Hoodie",
        description: "",
        price:60,
        image:['/src/assets/Gray_Hoodie.png'],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634346448,
        bestseller: true
    },
    


]