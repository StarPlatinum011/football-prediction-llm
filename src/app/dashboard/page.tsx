import DateRow from '@/components/date-picker';
import { CommandMenu } from '../../components/command-menu';
import GameCard from '../ui/game-card';

const Dashboard = () => {
    return (
            <>
                <div className="flex flex-col items-center gap-4 ">
                    <CommandMenu />
                    <DateRow />
                </div>
                <div className='bg-muted mt-4 h-screen rounded-lg'>
                    {/* <div className='flex flex-row py-3 text-accent-foreground text-sm rounded-lg '>
                        <p className='ml-3'>Time</p>
                        <p className='ml-14'>Match</p>
                        <p className='ml-18'>AI Tips</p>
                        <p className='ml-7'>Trust</p>
                        
                    </div> */}
                    <hr />
                    <div>
                        <GameCard />
                    </div>
                </div>
            </>
    );
};

export default Dashboard;