import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const VerticesTable = ({ coordinates, type }) => {
    return (
        <div>
            {type === "LWPOLYLINE" && <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>X</TableHead>
                        <TableHead>Y</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coordinates?.vertices?.map((vertex, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{vertex.x.toFixed(6)}</TableCell>
                            <TableCell>{vertex.y.toFixed(6)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}

            {type === "SPLINE" && <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Handle</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Color Index</TableHead>
                        <TableHead>Shape</TableHead>
                        <TableHead>Start (X, Y)</TableHead>
                        <TableHead>End (X, Y)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coordinates?.controlPoints?.map((line, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{line.handle}</TableCell>
                            <TableCell>{line.color}</TableCell>
                            <TableCell>{line.colorIndex}</TableCell>
                            <TableCell>{line.shape}</TableCell>
                            <TableCell>
                                {line.coordinates?.[0]?.x.toFixed(2)}, {line.coordinates?.[0]?.y.toFixed(2)}
                            </TableCell>
                            <TableCell>
                                {line.coordinates?.[1]?.x.toFixed(2)}, {line.coordinates?.[1]?.y.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}
        </div>

    );
};

export default VerticesTable;
