import { Card, CardContent, Typography, Grid, CardMedia, Button, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProducts(resp.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    

    return (
        <div>
            <Typography 
                variant="h4" 
                align="center" 
                gutterBottom 
                sx={{
                    fontFamily: "'Roboto', sans-serif", 
                    fontSize: '36px', 
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px'
                }}
            >
                Product Page
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ maxWidth: 345, textAlign: "center", padding: 2, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                                sx={{ objectFit: "contain", padding: 1 }}
                            />
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontFamily: "'Roboto', sans-serif", 
                                        fontWeight: 'bold',
                                        color: '#222'
                                    }}
                                    gutterBottom
                                >
                                    {product.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        fontFamily: "'Roboto', sans-serif", 
                                        color: '#666' 
                                    }}
                                >
                                    {product.category}
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontFamily: "'Roboto', sans-serif", 
                                        fontWeight: 'bold',
                                        color: '#D32F2F'
                                    }}
                                >
                                    ${product.price}
                                </Typography>

                                {/* Buttons: Add to Cart & Buy Now */}
                                <Box display="flex" justifyContent="space-between" marginTop={2}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        sx={{ 
                                            flex: 1, 
                                            marginRight: 1, 
                                            fontWeight: 'bold', 
                                            fontFamily: "'Roboto', sans-serif" 
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        sx={{ 
                                            flex: 1, 
                                            fontWeight: 'bold', 
                                            fontFamily: "'Roboto', sans-serif" 
                                        }}
                                        onClick={() => handleBuyNow(product.id)}
                                    >
                                        Buy Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductPage;
