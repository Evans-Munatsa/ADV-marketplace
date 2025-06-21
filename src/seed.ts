import { getPayload } from "payload";
import config from "@payload-config";

const categories =[
     {
        name: "All Products",
        slug: "all-products",
    },
    {
        name: "New Arrivals",
        slug: "new-arrivals",
    },
    {
        name: "Console Accessories",
        color: "#FFB347",
        slug: "console-accessories",
        subcategories: [
            {
                name: "PS2", slug: "ps2",
            },
            {
                name: "XBOX", slug: "xbox",
            },
            {
                name: "XBOX360", slug: "xbox360",
            },
            {
                name: "PS 3", slug: "ps3",
            },
            {
                name: "PS 4", slug: "ps4",
            },
            {
                name: "Wii", slug: "wii",
            },
            {
                name: "Game Consoles", slug: "game-consoles",
            },
        ],
    }
]



const seed =  async () => {
    const payload = await getPayload({ config });

    for (const category of categories ) {
        const parentCategory = await payload.create({
            collection: "categories",
            data: {
                name: category.name,
                slug: category.slug,
                color: category.color,
                parent: null,
            },
        });

        for (const subCategory of category.subcategories || []) {
            await payload.create({
                collection: "categories",
                data: {
                    name: subCategory.name,
                    slug: subCategory.slug,
                    parent: parentCategory.id,
                },
            });
        }
    }
}

await seed();

process.exit(0);