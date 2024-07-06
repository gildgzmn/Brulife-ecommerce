import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, products }) {

    useEffect(() => {
        // Fetch the products data from the server
        fetch("/products")
            .then((response) => response.json())
            .then((data) => products(data));
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid grid-cols-5 gap-4">
                            {products.map((product) => (
                                <a
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className="border rounded-lg p-4 mb-4 hover:bg-gray-100"
                                >
                                    <img src={product.img} />
                                    <p className="font-bold text-xl flex justify-center uppercase mt-2">{product.name}</p>
                                    <p className="flex justify-center">P {product.price}</p>

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
