import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import './ExerciseGraphics.css'
import type { GraphicsData } from '../models/Graphics.model';

interface Props {
    data: GraphicsData[];
}

export function ExerciseGraphic({data}: Props) {

    return (
        <div className='graphics-container'>
            <h3 className='graphics-title'>Max weight progress</h3>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="session__date" />

                    <YAxis />
                    
                    <Tooltip />
                    
                    <Line
                        type="monotone"
                        dataKey="max_weight"
                        stroke="#FF2D55"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r:8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}