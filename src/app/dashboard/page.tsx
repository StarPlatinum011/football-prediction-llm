import DateRow from '@/components/date-picker';
import { CommandMenu } from '../../components/command-menu';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center gap-4 ">
            <CommandMenu />
            <DateRow />
        </div>
    );
};

export default Dashboard;