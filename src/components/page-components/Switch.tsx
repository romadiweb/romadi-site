import { Switch } from "@headlessui/react";

export default function TailwindSwitch({
    enabled,
    setEnabled,
    disabled = false,
    }: {
    enabled: boolean;
    setEnabled: (val: boolean) => void;
    disabled?: boolean;
    }) {
    return (
        <Switch
        checked={enabled}
        onChange={setEnabled}
        disabled={disabled}
        className={`${
            enabled ? "bg-green-600" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
        }`}
        >
        <span
            className={`${
            enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
        </Switch>
    );
}
