import Image from "next/image";

interface PostProps {
    title: string;
    type: string;
    author: string;
    description: string;
    url: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export const Post = ({ post }: { post: PostProps }) => {

    return (
        <article className="w-full bg-[#111111]">
            <div className="w-full h-80 backdrop-blur-sm ">
                <img 
                    src={post.url}
                    alt={post.title}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="w-full flex flex-row justify-center items-center px-3 py-2">
                <div className="w-1/2">
                    <h1 className="text-2xl font-medium">
                        { 
                            post.title.length > 10
                            ? post.title.slice(0, 10) + '...'
                            : post.title
                        }
                    </h1>
                    <p className="text-sm">
                        {
                            post.author.length > 10
                            ? post.author.slice(0, 10) + '...'
                            : post.author
                        }
                    </p>
                </div>

                <div className="w-1/2 flex flex-col justify-center items-end">
                    <p className="text-sm">
                        $10
                    </p>
                    <p className="text-sm">
                        USD
                    </p>
                </div>
            </div>
        </article>
    )

}