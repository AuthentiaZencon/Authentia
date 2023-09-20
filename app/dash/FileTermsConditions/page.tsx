'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function InformationMessage () {

    return(

        <section className="bg-[#1B1B1B] text-white w-full max-w-xl h-fit flex justify-center mb-10 items-center  mx-auto my-auto">
            
            <div className="flex flex-col w-full  h-full space-y-5 p-8 justify-center items-center ">

                <div className="space-y-4">
                        <h2 className="text-lg">
                        Requirements for Uploading Photos and Vectors
                        </h2>

                        <p className="text-sm break-all font-semibold ">It is important to comply with the following requirements when uploading photographic images and vectors:</p>
                        <div className="flex-col text-sm break-all  space-y-5">

                            <p className="text-sm break-all font-semibold">Image Size:</p>
                            <p className="pl-10"> 
                            The image must have a minimum size of 800 pixels on its longest dimension.
                            We recommend that images have a resolution of at least 72 pixels per inch (PPI) to ensure proper on-screen display.                            </p>
                            <p className="text-sm break-all font-semibold ">Image File Size:</p>
                            <p className="pl-10"> 
                                The maximum allowed size for an individual image is 25 MB. For vectors, the limit is 10 MB.
                                Please ensure that your image or vector meets these limits in order to upload them successfully to our platform.
                            </p>
                            <p className="text-sm break-all font-semibold ">Accepted Formats:</p>
                            <p className="pl-10"> 
                                We accept the following file formats for photographic images: JPEG, PNG, GIF, TIFF, and BMP.
                                For vector images, SVG (Scalable Vector Graphics) and AI (Adobe Illustrator) formats are preferred. However, we also accept EPS and PDF files with embedded vectors.                            </p>
                            <p className="text-sm break-all font-semibold ">Sensitive Content:</p>
                            <p className="pl-10"> 
                                Images containing pornographic, violent, discriminatory, defamatory, illegal, or copyright-infringing content are not allowed.
                                All images and vectors must adhere to our content guidelines, promoting a respectful and safe environment for all users.                            </p>
                            <p className="text-sm break-all font-semibold ">Color Profile:</p>
                            <p className="pl-10">
                                For the best visual results, it is recommended to use the RGB (Red, Green, Blue) color profile for photographic images.
                            For vectors, make sure that colors are defined in either RGB or CMYK, as appropriate.
                            </p>
                        </div>

                        <p className="text-sm break-all">When uploading your image or vector, please be aware that our moderators will review the content to ensure it complies with these requirements and our usage policies. If your content does not meet these standards, it may be removed from the platform.</p>
                </div>

                <Link href='./register' className="">
                    <Button className='justify-center items-center bg-[#D0AE66]  py-1 px-2 flex text-base  w-32'>Back</Button>

                </Link>
            </div>


            

        </section>

    )

}