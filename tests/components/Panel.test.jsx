import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Panel from '../../src/components/Panel/Panel';

describe('Panel component', () => {
  const mockTask = {
    taskid: 1,
    taskname: 'Task 1',
    taskdesc: 'Description for Task 1',
  };

  it('renders the task name and description', () => {
    render(
      <Panel
        taskid={mockTask.taskid}
        taskname={mockTask.taskname}
        taskdesc={mockTask.taskdesc}
      />
    );

    const taskNameElement = screen.getByText('Task 1');
    const taskDescElement = screen.getByText('Description for Task 1');

    expect(taskNameElement).toBeInTheDocument();
    expect(taskDescElement).toBeInTheDocument();
  });

});
