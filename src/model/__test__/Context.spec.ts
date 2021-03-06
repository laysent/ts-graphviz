import { RootClusterType } from '../../types';
import { Context } from '../Context';
import { Digraph } from '../Digraph';
import { Graph } from '../Graph';

describe('class Context', () => {
  let context: Context;
  beforeEach(() => {
    context = new Context();
  });

  it('should be undefined, before set root graph', () => {
    expect(context.graphType).toBeUndefined();
  });

  it('should be "digraph", when root graph is Digraph', () => {
    context.root = new Digraph(context);
    expect(context.graphType).toBe(RootClusterType.digraph);
  });

  it('should be "graph", when root graph is Graph', () => {
    context.root = new Graph(context);
    expect(context.graphType).toBe(RootClusterType.graph);
  });
});
