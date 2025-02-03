import { motion } from "framer-motion";

const MotionLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
                className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default MotionLoader;
