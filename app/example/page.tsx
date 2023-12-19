import { PrismaClient } from "@prisma/client";

type Props = {};

const Example = (props: Props) => {
    const prisma = new PrismaClient();

    async function createUser() {
        const user = await prisma.user.create({
            data: {
                name: "Alice",
                email: "alice@prisma.io",
            },
        });
        console.log(user);
    }

    createUser()
        .then(async () => {
            await prisma.$disconnect();
            console.log("done");
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        });

    return <div>Example</div>;
};

export default Example;
