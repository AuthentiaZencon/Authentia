'use client'
import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";

export default function UploadImage () {

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const addRegistration = trpc.addRegistration.useMutation()

    const imageMutation = useMutation({
        mutationFn: async (image: File) => {
            const formData = new FormData()
            formData.append('file', image)
            formData.append('upload_preset', 'authentia')

            const data = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
                method: 'POST',
                body: formData
            })
            return await data.json()
        },
        onSettled: ( data ) => {
            if (!data) return
            const secure_url = data.secure_url
            const dataToSend = {
                ...registrationData,
                url: secure_url
            }
            addRegistration.mutate(dataToSend)
        }
    })

    const [ image, setImage ] = useState<File|null>(null)
    const [ registrationData, setRegistrationData ] = useState({
        title: '',
        author: '',
        type: '',
        description: ''
    })

    const onDrop = useCallback((acceptedFiles: File[]) => {		
        setImage(acceptedFiles[0])
	}, [])

    const { getRootProps, getInputProps } = useDropzone({ 
		onDrop,
		accept: {
			'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
		},
		multiple: false,
		maxFiles: 1,
	})

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!image) return
        imageMutation.mutate(image)
        console.log(registrationData)
    }

    return(
        <>
            <article className="w-full text-white">

                <h1 className="text-4xl font-medium">
                    Register a property
                </h1>

                <form className="w-full h-12 px-20 mt-10" onSubmit={onSubmit}>

                    <h2 className="text-3xl">
                        Property Registration
                    </h2>
                    <span className="text-[#BEBEBE] block mt-2">
                        First, you will need to fill the data of your digital asset.
                    </span>

                    <div className="text-xl font-medium mt-10 flex flex-col gap-5">

                        <div>
                            <Label htmlFor="title">Asset title</Label>
                            <Input name="title" placeholder="title" 
                                value={registrationData.title}
                                onChange={(e) => setRegistrationData({ ...registrationData, title: e.target.value })}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-5 md:flex-row">
                            <div className="w-1/2">
                                <Label htmlFor="author">Author</Label>
                                <Input name="author" placeholder="image author" 
                                    value={registrationData.author}
                                    onChange={(e) => setRegistrationData({ ...registrationData, author: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="w-1/2">
                                <Label htmlFor="type">Type of image</Label>
                                <Input name="type" placeholder="nature" 
                                    value={registrationData.type}
                                    onChange={(e) => setRegistrationData({ ...registrationData, type: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea name="description" placeholder="description" rows={10}
                                value={registrationData.description}
                                onChange={(e) => setRegistrationData({ ...registrationData, description: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <Label>Upload file</Label>
                            <div className="w-full h-36 border border-[#CBD5E1] rounded-md flex flex-col justify-center items-center text-[#929292]"
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <p>
                                    <span className="text-[#D0AE66] mr-1 cursor-pointer">Upload file</span>
                                    or drag and drop
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex justify-end items-center mt-5">
                        <Button className="bg-[#D0AE66]"
                            type="submit"
                        >
                            Save Image
                        </Button>
                    </div>

                </form>

            </article>
        </>
    )

}