import { useState } from 'react';
import AddressInputForm from "./AddressInputForm";
import { Wifi } from "lucide-react";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent, CardAction, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

function CreateSpotForm( {onCreate} ){
    const initialForm = {
        name: '',
        type: '',
        cost: '',
        hasWifi: false,
    };

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm(prev => ({
            ...prev,
            // [name]: type === 'checkbox' ? checked : value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form", form);
        onCreate(form);
        setForm(initialForm);
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle> Start reviewing a new Spot! </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='space-y-2'>
                        <Label htmlFor="name">Spot Name * </Label>
                        <Input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g., Campus Library"
                            required
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor="type">Type </Label>
                        <Input
                            id="type"
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            placeholder="e.g., Cafe, Library, Park"
                            required
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor="cost">Cost </Label>
                        <Input
                            id="cost"
                            name="cost"
                            value={form.cost}
                            onChange={handleChange}
                            placeholder="$, $$, or $$$"
                            required
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="hasWifi"
                            checked={form.hasWifi}
                            onCheckedChange={(checked) =>
                                setForm(prev => ({ ...prev, hasWifi: checked }))
                            }
                        />
                        <Label
                            htmlFor="hasWifi"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 cursor-pointer"
                        >
                            <Wifi className="w-4 h-4" />
                            WiFi Available
                        </Label>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-white border border-color-black" >
                        Create Spot
                    </Button>
                </form>
            </CardContent>
            
        </Card>

    );
}

export default CreateSpotForm;