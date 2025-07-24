(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/CartContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            {
                const existingItem = state.items.find((item)=>item.id === action.payload.id);
                if (existingItem) {
                    const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item);
                    return {
                        items: updatedItems,
                        total: updatedItems.reduce((sum, item)=>sum + item.price * item.quantity, 0)
                    };
                } else {
                    const cartItem = {
                        ...action.payload,
                        quantity: 1
                    };
                    const newItems = [
                        ...state.items,
                        cartItem
                    ];
                    return {
                        items: newItems,
                        total: newItems.reduce((sum, item)=>sum + item.price * item.quantity, 0)
                    };
                }
            }
        case "REMOVE_FROM_CART":
            {
                const filteredItems = state.items.filter((item)=>item.id !== action.payload);
                return {
                    items: filteredItems,
                    total: filteredItems.reduce((sum, item)=>sum + item.price * item.quantity, 0)
                };
            }
        case "UPDATE_QUANTITY":
            {
                const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                        ...item,
                        quantity: Math.max(0, action.payload.quantity)
                    } : item).filter((item)=>item.quantity > 0);
                return {
                    items: updatedItems,
                    total: updatedItems.reduce((sum, item)=>sum + item.price * item.quantity, 0)
                };
            }
        case "CLEAR_CART":
            return {
                items: [],
                total: 0
            };
        default:
            return state;
    }
};
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CartProvider = ({ children })=>{
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, {
        items: [],
        total: 0
    });
    const addToCart = (product)=>{
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
    };
    const removeFromCart = (id)=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        });
    };
    const updateQuantity = (id, quantity)=>{
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                id,
                quantity
            }
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: "CLEAR_CART"
        });
    };
    const getItemCount = ()=>{
        return state.items.reduce((count, item)=>count + item.quantity, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            state,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getItemCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
};
_s(CartProvider, "wgAV24+Ml8KA5N6lhM9BTpJuCfk=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_CartContext_tsx_8f3f6664._.js.map