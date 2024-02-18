"use client";

import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/Button/Button";
import {P} from "@/components/P/P";
import {Tag} from "@/components/Tag/Tag";
import {useEffect, useState} from "react";
import {Rating} from "@/components/Rating/Rating";

export default function Home() {
    const [counter, setCounter] = useState<number>(0);
    useEffect(() => {
        console.log('Counter ' + counter);
        return function cleanup() {
            console.log('Unmount');
        };
    });
    useEffect(() => {
        console.log('Mounted');
    }, []);

    const [rating, setRating] = useState<number>(4);

    return (
        <main>
            <div>
                <Htag tag='h1'>{counter}</Htag>
                <Button appearance="primary" className="test" arrow='right'>My Button</Button>
                <Button appearance="ghost" arrow='down' onClick={() => setCounter(x => x - 1)}>My Button</Button>
                <P size={"l"}>Large</P>
                <P size={"m"}>Medium</P>
                <P size={"s"}>Small</P>
                <Tag size={'s'}>Small tag</Tag>
                <Tag size={'m'} color={'red'}>Medium tag</Tag>
                <Tag size={'m'} color={'grey'}>Medium tag</Tag>
                <Rating rating={rating} setRating={setRating} isEditable/>
            </div>
        </main>
    );
}
