import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../utils/api";
import {Button} from '@/components/ui/button'

const BlockList = () => {
    const { id } = useParams()
    const [blocks, setBlocks] = useState([])
    const navigate = useNavigate()

    const getUploadedFile = async () => {
        const res = await axios.get(`${API_BASE_URL}v1/blocks/${id}`)

        if (!res) throw new Error("Blocks not found")

        setBlocks(res.data.data)
        console.log(res.data.data)
    }

    const handleClick = (blockId) => {
        navigate(`/blocks/${blockId}/entities`)
    }

    useEffect(() => {
        getUploadedFile()
    }, [])


    return (
        <div className="grid gap-4 mt-4">
            <h1 className="text-2xl font-bold m-auto">BLOCKS</h1>
            {blocks?.map((block, idx) => (
                <Card key={idx}>
                    <CardHeader>
                        <CardTitle>{block.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between">
                        <div className="flex gap-2">
                            <p>Coordinates: {JSON.stringify(block.coordinates)}</p>
                            <div className="flex gap-2">
                                <p>X : {block?.positionX} </p>
                                <p>Y : {block?.positionY}</p>
                                <p>Z : {block?.positionZ}</p>
                            </div>
                        </div>
                        <Button onClick={() => handleClick(block.id)}>
                            More Details
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default BlockList
