import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="flex flex-col gap-4 items-center mt-10">
                {/* Small Buttons */}
                <Button title="Small Rounded-sm" styles="text-sm border rounded-sm" />
                <Button title="Small Rounded-md" styles="text-sm border rounded-md" />
                <Button title="Small Rounded-full" styles="text-sm border rounded-full" />

                {/* Medium Buttons */}
                <Button title="Medium Rounded-sm" styles="text-base border rounded-sm" />
                <Button title="Medium Rounded-md" styles="text-base border rounded-md" />
                <Button title="Medium Rounded-full" styles="text-base border rounded-full" />

                {/* Large Buttons */}
                <Button title="Large Rounded-sm" styles="text-lg border rounded-sm" />
                <Button title="Large Rounded-md" styles="text-lg border rounded-md" />
                <Button title="Large Rounded-full" styles="text-lg border rounded-full" />
            </div>
        </div>
    )
}

export default Landing;