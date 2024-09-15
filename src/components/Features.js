import { Container, Grid, Typography, Box } from "@mui/material";

const Features = () => {
    return (
        <div id="features" className="text-black">
            <Container>
                <Box sx={{ maxWidth: '50%', margin: '0 auto' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary fill-amber-500">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>

                    <Typography variant="h4" className="my-8 font-bold text-black">
                        Crafty, in search of efficient study plans
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                        Trying to make your studies efficient and followed.
                    </Typography>
                </Box>
                <Grid container spacing={4} className="mt-16 divide-x divide-y divide-gray-700 rounded-3xl border border-gray-700">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={index} className="group relative bg-secondary-3 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <Box className="relative space-y-8 py-12 p-8">
                                <img
                                    src={feature.imgSrc}
                                    className="w-12"
                                    width="512"
                                    height="512"
                                    alt={feature.alt}
                                />
                                <Box className="space-y-2">
                                    <Typography variant="h6" className="text-xl font-semibold text-white transition group-hover:text-secondary">
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-300">
                                        {feature.description}
                                    </Typography>
                                </Box>
                                <a href="/" className="flex items-center justify-between group-hover:text-secondary text-white">
                                    <span className="text-sm">Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

const features = [
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
        alt: "Measured Progress Illustration",
        title: "Measured Progress",
        description: "We have a dashboard with daily activities and log in time to make you stick to the progress and measure it."
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341134.png",
        alt: "Notification to continue your strike",
        title: "Notification to continue your strike",
        description: "You will be notified each time you are about to break your strike to join the platform."
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
        alt: "Competent Teachers Illustration",
        title: "Competent Teachers",
        description: "We offer expert teachers in their domains so that you can be a better developer and software engineer."
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
        alt: "Project Follow Deadline Illustration",
        title: "Project Follow Deadline",
        description: "In order to make the experience fun, we add deadlines to make it fun to finish projects before them."
    }
];

export default Features;
