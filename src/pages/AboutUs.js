import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTemplate from '../components/SimpleTemplate/SimpleTemplate';
import Container from '@material-ui/core/Container';
import CustomTypography from '../UI/CustomTypography';
import TeamCard from '../components/TeamCard/TeamCard';
import TeamCardCompact from '../components/TeamCard/TeamCardCompact/TeamCardCompact';
import Slider from 'react-slick';
import AndreasConstantinou from '../assets/teamAvatars/AndreasConstantinou.png';
import FilipposSiokouros from '../assets/teamAvatars/FilipposSiokouros.png';
import VanjaPopovic from '../assets/teamAvatars/VanjaPopovic.png';
import AndreasKlitis from '../assets/teamAvatars/AndreasKlitis.png';
import AndreasKarpasitis from '../assets/teamAvatars/AndreasKarpasitis.png';
import MichaelLambaskis from '../assets/teamAvatars/MichaelLambaskis.png';

const useStyles = makeStyles(() => ({
	container: {
		marginTop: '20px',
	},
	slider: {
		padding: '50px 50px',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
	},
	red: {
		background: 'red',
	},
	heading: {
		textAlign: 'center',
	},
	paragraph: {
		padding: '10px 40px',
		textAlign: 'justify',
	}
}));

const AboutUs = (props) => {
	const { onPageVisit } = props;
	const classes = useStyles();
	const [team] = useState([
		{
			name: 'Andreas Constantinou',
			role: 'Founder & CEO',
			image: AndreasConstantinou,
		},
		{
			name: 'Filippos Siokouros',
			role: 'Lead Front-End Developer',
			image: FilipposSiokouros,
		},
		// {
		// 	name: 'Cleanthis Evangelos Metaxas',
		// 	role: 'Front-End Developer',
		// 	image: CleanthisEvangelosMetaxas,
		// },
		{
			name: 'Vanja Popovic',
			role: 'Lead Mobile App Developer',
			image: VanjaPopovic,
		},
		{
			name: 'Andreas Klitis',
			role: 'Mobile App Developer',
			image: AndreasKlitis,
		},
		{
			name: 'Andreas Karpasitis',
			role: 'Design Manager',
			image: AndreasKarpasitis,
		},
		{
			name: 'Michael Lambaskis',
			role: 'Sales Manager',
			image: MichaelLambaskis,
		},
	]);

	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	let slider1 = [];
	let slider2 = [];

	useEffect(() => {
		onPageVisit();
		setNav1(slider1);
		setNav2(slider2);
	}, [onPageVisit, slider1, slider2]);

	const cards = team.map((el, index) => {
		return <TeamCard key={index} person={el} />;
	});

	const cardsCompact = team.map((el, index) => {
		return <TeamCardCompact key={index} person={el} />;
	});

	const settings1 = {
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const settings2 = {
		infinite: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	};

	return (
		<SimpleTemplate title="About Us">
			<Container className={classes.container}>
				{/* <Typography variant="h4" className={classes.heading}>Who is Pokerload</Typography>
				<Typography className={classes.paragraph}>Lorizzle ipsum dolizzle sizzle bling bling, stuff adipiscing elizzle. Nullizzle go to hizzle away, aliquet volutpizzle, suscipit quis, brizzle fo shizzle, we gonna chung. Pellentesque eget break yo neck, yall. Sed erizzle. Crunk black dolor dapibizzle own yo&lsquos tempizzle that&lsquos the shizzle. Maurizzle check out this nibh et pimpin&lsquo. Bling bling phat tortizzle. Pellentesque cool rhoncizzle yippiyo. In hac ma nizzle platea dictumst. Uhuh ... yih! brizzle. Phat tellus urna, pretizzle daahng dawg, mattizzle tellivizzle, ghetto vitae, uhuh ... yih!. Boofron suscipizzle. Gangsta the bizzle velit sed purus.</Typography> */}
				<div className={classes.slider}>
					<CustomTypography variant="h4" pb={30} fontWeigh='600'>Meet The Team</CustomTypography>
					<Slider {...settings1}
						asNavFor={nav2}
						ref={slider => (slider1 = slider)}>
						{cards}
					</Slider>
					<Slider
						{...settings2}
						asNavFor={nav1}
						ref={slider => (slider2 = slider)}
						swipeToSlide={true}
						focusOnSelect={true}>
						{cardsCompact}
					</Slider>
				</div>
			</Container>
		</SimpleTemplate>
	);
};

export default AboutUs;

AboutUs.propTypes = {
	onPageVisit: PropTypes.func
};
