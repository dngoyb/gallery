import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type props = {
	href?: string;
	Icon: LucideIcon;
	label: string;
};

export default function NavButton({ href, Icon, label }: props) {
	return (
		<Button
			variant='ghost'
			size='icon'
			aria-label={label}
			title={label}
			className='rounded-full'
			asChild>
			{href ? (
				<Link href={href}>
					<Icon />
				</Link>
			) : (
				<Icon />
			)}
		</Button>
	);
}
