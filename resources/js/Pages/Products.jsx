import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Product({ auth }) {
    const { product } = usePage().props;
    return (
        <AuthenticatedLayout
        user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title={`Product - ${product.name}`} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-4 mb-4 ml-4 text-3xl font-bold">{product.name}</h1>
                <img src={product.img} alt={product.name} />
                <p className="ml-4 mt-4">{product.desc}</p>
                <p className="ml-4">Price: P{product.price}</p>
                <a href="/dashboard" className="text-blue-500 underline">Back</a>
                <a href="/cart" className="text-blue-500 underline ml-4">Add to cart</a>



            </div>
        </AuthenticatedLayout>
    );
}
