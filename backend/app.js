const express = require('express');
const { PrismaClient } = require('@prisma/client');
const userRouter = require("./controller/userController.js");
const app = express();
const prisma = new PrismaClient();




app.use(express.json());
app.use("/controller", userRouter);
app.post('/users', async (req, res) => {
  try {
    const { name, email, currentJobId } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        currentJob: currentJobId ? { connect: { id: currentJobId } } : undefined,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      currentJob: true,
      applyingJobs: true,
      post: true,
    },
  });
  res.json(users);
});

app.post('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { currentJobId } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        currentJob: { connect: { id: currentJobId } },
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

app.post('/jobs', async (req, res) => {
  try {
    const { title, salary, location,post } = req.body;
    const job = await prisma.job.create({
      data: {
        title,
        salary,
        location,
        post: post ? { connect: { id: post } } : undefined,
      },
    });
    res.json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error creating job' });
  }
});

app.get('/jobs', async (req, res) => {
  const jobs = await prisma.job.findMany({
    include: {
      currentJobUser: true,
      applyingUsers: true,
      post: true,
    },
  });
  res.json(jobs);
});

app.put('/jobs/:id', async (req, res) => {
  const { id } = req.params;
  const { salary } = req.body;
  try {
    const job = await prisma.job.update({
      where: { id: parseInt(id) },
      data: { salary },
    });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Error updating job' });
  }
});

app.delete('/jobs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.job.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { title, description, jobId, userId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        description,
        job: jobId ? { connect: { id: jobId } } : undefined,
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      job: true,
      user: true,
    },
  });
  res.json(posts);
});

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { description },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
