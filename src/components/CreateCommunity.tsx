import { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

function CreateCommunity() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("CreateCommunity.handleOnSubmit:", { tokenName, tokenSymbol });
    // TODO: connect to wallet & deploy contract
  };

  return (
    <Box sx={{ py: 6 }}>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Deploy community contract
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px' }}>
              Deploy
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Community Name"
              variant="outlined"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Token Symbol"
              variant="outlined"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default CreateCommunity;
