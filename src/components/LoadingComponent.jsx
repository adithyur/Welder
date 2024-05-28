import { quantum } from 'ldrs';

quantum.register();

function LoadingComponent() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <l-quantum
                size="45"
                speed="1.75"
                color="black"
            ></l-quantum>
            <p className="mt-4 text-gray-700">Loading, please wait...</p>
        </div>
    );
}

export default LoadingComponent;
